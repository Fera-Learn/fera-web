"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import {
  getAuthCallbackUrl,
  getDashboardRedirect,
  getPostCallbackRedirect,
  getRedirectWithMessage,
  getSafeRelativePath,
} from "./redirects";

function getRequiredString(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

function redirectWithError(
  path: string,
  message: string,
  next?: string,
  email?: string,
) {
  redirect(getRedirectWithMessage(path, { error: message, next, email }));
}

export async function login(formData: FormData) {
  const email = getRequiredString(formData, "email");
  const password = getRequiredString(formData, "password");
  const next = getSafeRelativePath(formData.get("next"));

  if (!email || !password) {
    redirectWithError("/login", "Enter your email and password.", next, email);
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirectWithError("/login", error.message, next, email);
  }

  redirect(getPostCallbackRedirect(next));
}

export async function signup(formData: FormData) {
  const displayName = getRequiredString(formData, "displayName");
  const email = getRequiredString(formData, "email");
  const password = getRequiredString(formData, "password");
  const confirmPassword = getRequiredString(formData, "confirmPassword");
  const next = getSafeRelativePath(formData.get("next"));

  if (!displayName || !email || !password) {
    redirectWithError("/signup", "Complete all required fields.", next, email);
  }

  if (password !== confirmPassword) {
    redirectWithError("/signup", "Passwords do not match.", next, email);
  }

  if (password.length < 8) {
    redirectWithError(
      "/signup",
      "Use at least 8 characters for your password.",
      next,
      email,
    );
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { display_name: displayName },
      emailRedirectTo: getAuthCallbackUrl(next),
    },
  });

  if (error) {
    redirectWithError("/signup", error.message, next, email);
  }

  if (data.session) {
    redirect(getPostCallbackRedirect(next));
  }

  redirect(
    getRedirectWithMessage("/login", {
      message: "Check your email to confirm your account, then sign in.",
      next,
      email,
    }),
  );
}

export async function requestPasswordReset(formData: FormData) {
  const email = getRequiredString(formData, "email");

  if (!email) {
    redirectWithError("/reset-password", "Enter your email address.");
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: getAuthCallbackUrl("/update-password"),
  });

  if (error) {
    redirectWithError("/reset-password", error.message, undefined, email);
  }

  redirect(
    getRedirectWithMessage("/reset-password", {
      message: "If that email exists, a reset link has been sent.",
      email,
    }),
  );
}

export async function updatePassword(formData: FormData) {
  const password = getRequiredString(formData, "password");
  const confirmPassword = getRequiredString(formData, "confirmPassword");

  if (!password) {
    redirectWithError("/update-password", "Enter a new password.");
  }

  if (password !== confirmPassword) {
    redirectWithError("/update-password", "Passwords do not match.");
  }

  if (password.length < 8) {
    redirectWithError(
      "/update-password",
      "Use at least 8 characters for your password.",
    );
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    redirectWithError("/update-password", error.message);
  }

  await supabase.auth.signOut();

  redirect(
    getRedirectWithMessage("/login", {
      message: "Password updated. Sign in with your new password.",
    }),
  );
}

export async function acceptStaffInvitation(formData: FormData) {
  const token = getRequiredString(formData, "token");

  if (!token) {
    redirect(
      getRedirectWithMessage("/accept-invite", {
        error: "The invitation link is missing its token.",
      }),
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect(
      getRedirectWithMessage("/login", {
        next: `/accept-invite?token=${encodeURIComponent(token)}`,
      }),
    );
  }

  const { data: institutionId, error } = await supabase.rpc(
    "accept_staff_invitation",
    { p_token: token },
  );

  if (error || !institutionId) {
    redirect(
      getRedirectWithMessage("/accept-invite", {
        error: error?.message ?? "Could not accept this invitation.",
        token,
      }),
    );
  }

  redirect(getDashboardRedirect(`/dashboard?institution=${institutionId}`));
}
