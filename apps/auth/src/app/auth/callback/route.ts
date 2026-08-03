import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

import {
  getPostCallbackRedirect,
  getRedirectWithMessage,
} from "@/lib/auth/redirects";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next");
  const authError =
    requestUrl.searchParams.get("error_description") ??
    requestUrl.searchParams.get("error");

  if (authError) {
    redirect(
      getRedirectWithMessage("/login", { error: authError, next: next ?? "/" }),
    );
  }

  if (!code) {
    redirect(
      getRedirectWithMessage("/login", {
        error: "The authentication link is missing its verification code.",
        next: next ?? "/",
      }),
    );
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    redirect(
      getRedirectWithMessage("/login", {
        error: error.message,
        next: next ?? "/",
      }),
    );
  }

  redirect(getPostCallbackRedirect(next));
}
