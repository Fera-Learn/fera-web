import {
  AuthTextLink,
  AuthNotice,
  AuthShell,
} from "@/components/auth/auth-shell";
import { Field, SubmitButton } from "@/components/auth/auth-form";
import { requestPasswordReset } from "@/lib/auth/actions";
import {
  getAuthSearchParams,
  getSearchParam,
  type AuthSearchParams,
} from "@/lib/auth/search-params";

interface ResetPasswordPageProps {
  searchParams?: AuthSearchParams;
}

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const params = await getAuthSearchParams(searchParams);
  const error = getSearchParam(params, "error");
  const message = getSearchParam(params, "message");
  const email = getSearchParam(params, "email");

  return (
    <AuthShell
      description="Enter your email and we will send a secure link to reset your password."
      eyebrow="Account recovery"
      footer={
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>Remembered it?</span>
          <AuthTextLink href="/login">Back to sign in</AuthTextLink>
        </div>
      }
      title="Reset your password"
    >
      {error ? <AuthNotice type="error">{error}</AuthNotice> : null}
      {message ? <AuthNotice type="success">{message}</AuthNotice> : null}
      <form action={requestPasswordReset} className="grid gap-5">
        <Field
          autoComplete="email"
          defaultValue={email}
          label="Email"
          name="email"
          type="email"
        />
        <SubmitButton>Send reset link</SubmitButton>
      </form>
    </AuthShell>
  );
}
