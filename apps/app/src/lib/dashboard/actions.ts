"use server";

import { redirect } from "next/navigation";
import { getFeraAppUrls } from "@repo/supabase/config";

import { createClient } from "@/lib/supabase/server";

import { getLoginUrl } from "./access";
import {
  isAcademicYear,
  isInstitutionType,
  isStaffInviteRole,
  isTimezone,
  slugifyInstitutionName,
} from "./institutions";

function getFormString(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

function getOnboardingRedirect(
  error: string,
  fields: Record<string, string> = {},
) {
  const params = new URLSearchParams({ error });

  for (const [key, value] of Object.entries(fields)) {
    if (value) {
      params.set(key, value);
    }
  }

  return `/onboarding?${params.toString()}`;
}

function getInstitutionErrorMessage(message: string) {
  if (
    message.includes("institutions_slug_key") ||
    message.toLowerCase().includes("duplicate key")
  ) {
    return "That institution URL slug is already in use.";
  }

  return message;
}

export async function createInstitution(formData: FormData) {
  const name = getFormString(formData, "name");
  const rawSlug = getFormString(formData, "slug");
  const slug = slugifyInstitutionName(rawSlug || name);
  const type = getFormString(formData, "type") || "university";
  const timezone = getFormString(formData, "timezone") || "Europe/London";
  const defaultAcademicYear =
    getFormString(formData, "defaultAcademicYear") || "2026/27";
  const fields = {
    name,
    slug,
    type,
    timezone,
    defaultAcademicYear,
  };

  if (name.length < 3) {
    redirect(
      getOnboardingRedirect(
        "Enter an institution name with at least 3 characters.",
        fields,
      ),
    );
  }

  if (slug.length < 3) {
    redirect(
      getOnboardingRedirect(
        "Use an institution URL slug with at least 3 letters or numbers.",
        fields,
      ),
    );
  }

  if (!isInstitutionType(type)) {
    redirect(getOnboardingRedirect("Choose a valid institution type.", fields));
  }

  if (!isAcademicYear(defaultAcademicYear)) {
    redirect(getOnboardingRedirect("Choose a valid academic year.", fields));
  }

  if (!isTimezone(timezone)) {
    redirect(getOnboardingRedirect("Choose a valid timezone.", fields));
  }

  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect(getLoginUrl("/onboarding"));
  }

  const { data: institutionId, error } = await supabase.rpc(
    "create_institution_with_owner",
    {
      p_name: name,
      p_slug: slug,
      p_type: type,
      p_timezone: timezone,
      p_default_academic_year: defaultAcademicYear,
    },
  );

  if (error) {
    redirect(
      getOnboardingRedirect(getInstitutionErrorMessage(error.message), fields),
    );
  }

  redirect(`/dashboard?institution=${institutionId}`);
}

function getStaffRedirect(
  institutionId: string,
  params: Record<string, string> = {},
) {
  const searchParams = new URLSearchParams({ institution: institutionId });

  for (const [key, value] of Object.entries(params)) {
    if (value) {
      searchParams.set(key, value);
    }
  }

  return `/staff?${searchParams.toString()}`;
}

function getInviteErrorMessage(message: string) {
  if (message.toLowerCase().includes("duplicate key")) {
    return "An active invitation already exists for that email address.";
  }

  return message;
}

export async function createStaffInvitation(formData: FormData) {
  const institutionId = getFormString(formData, "institutionId");
  const email = getFormString(formData, "email").toLowerCase();
  const displayName = getFormString(formData, "displayName");
  const role = getFormString(formData, "role") || "lecturer";

  if (!institutionId) {
    redirect("/dashboard");
  }

  if (!email || !email.includes("@")) {
    redirect(
      getStaffRedirect(institutionId, {
        error: "Enter a valid staff email address.",
        email,
        displayName,
        role,
      }),
    );
  }

  if (!isStaffInviteRole(role)) {
    redirect(
      getStaffRedirect(institutionId, {
        error: "Choose a valid staff role.",
        email,
        displayName,
      }),
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect(getLoginUrl(`/staff?institution=${institutionId}`));
  }

  const { data: token, error } = await supabase.rpc("create_staff_invitation", {
    p_display_name: displayName || undefined,
    p_email: email,
    p_institution_id: institutionId,
    p_role: role,
  });

  if (error || !token) {
    redirect(
      getStaffRedirect(institutionId, {
        error: getInviteErrorMessage(error?.message ?? "Could not create invitation."),
        email,
        displayName,
        role,
      }),
    );
  }

  const { authAppUrl } = getFeraAppUrls();
  const inviteUrl = new URL("/accept-invite", authAppUrl);
  inviteUrl.searchParams.set("token", token);

  redirect(
    getStaffRedirect(institutionId, {
      invited: "1",
      inviteEmail: email,
      inviteUrl: inviteUrl.toString(),
    }),
  );
}
