import {
  AuthTextLink,
  AuthNotice,
  AuthShell,
} from "@/components/auth/auth-shell";
import { Field, SubmitButton } from "@/components/auth/auth-form";
import { updatePassword } from "@/lib/auth/actions";
import {
  getAuthSearchParams,
  getSearchParam,
  type AuthSearchParams,
} from "@/lib/auth/search-params";
import { createClient } from "@/lib/supabase/server";

interface UpdatePasswordPageProps {
  searchParams?: AuthSearchParams;
}

export const dynamic = "force-dynamic";

export default async function UpdatePasswordPage({
  searchParams,
}: UpdatePasswordPageProps) {
  const params = await getAuthSearchParams(searchParams);
  const error = getSearchParam(params, "error");
  let hasSession = false;

  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getSession();
    hasSession = Boolean(data.session);
  } catch {
    hasSession = false;
  }

  return (
    <AuthShell
      description="Set a new password for your Fera account. Reset links expire after a short period."
      eyebrow="New password"
      footer={
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>Need a new link?</span>
          <AuthTextLink href="/reset-password">Request reset</AuthTextLink>
        </div>
      }
      title="Update your password"
    >
      {error ? <AuthNotice type="error">{error}</AuthNotice> : null}
      {hasSession ? (
        <form action={updatePassword} className="grid gap-5">
          <Field
            autoComplete="new-password"
            label="New password"
            name="password"
            type="password"
          />
          <Field
            autoComplete="new-password"
            label="Confirm new password"
            name="confirmPassword"
            type="password"
          />
          <SubmitButton>Update password</SubmitButton>
        </form>
      ) : (
        <AuthNotice type="error">
          This reset link is expired or invalid. Request a fresh password reset
          link to continue.
        </AuthNotice>
      )}
    </AuthShell>
  );
}
