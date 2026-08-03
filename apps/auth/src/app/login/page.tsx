import {
  AuthTextLink,
  AuthNotice,
  AuthShell,
} from "@/components/auth/auth-shell";
import { Field, SubmitButton } from "@/components/auth/auth-form";
import { login } from "@/lib/auth/actions";
import {
  getAuthSearchParams,
  getSearchParam,
  type AuthSearchParams,
} from "@/lib/auth/search-params";

interface LoginPageProps {
  searchParams?: AuthSearchParams;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await getAuthSearchParams(searchParams);
  const error = getSearchParam(params, "error");
  const message = getSearchParam(params, "message");
  const next = getSearchParam(params, "next") ?? "/";
  const email = getSearchParam(params, "email");

  return (
    <AuthShell
      description="Sign in with the account connected to your institution, staff profile, or student record."
      eyebrow="Welcome back"
      footer={
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>New to Fera?</span>
          <AuthTextLink href={`/signup?next=${encodeURIComponent(next)}`}>
            Create an account
          </AuthTextLink>
        </div>
      }
      title="Sign in to Fera"
    >
      {error ? <AuthNotice type="error">{error}</AuthNotice> : null}
      {message ? <AuthNotice type="success">{message}</AuthNotice> : null}
      <form action={login} className="grid gap-5">
        <input name="next" type="hidden" value={next} />
        <Field
          autoComplete="email"
          defaultValue={email}
          label="Email"
          name="email"
          type="email"
        />
        <Field
          autoComplete="current-password"
          label="Password"
          name="password"
          type="password"
        />
        <div className="flex items-center justify-between text-sm">
          <AuthTextLink href="/reset-password">Forgot password?</AuthTextLink>
        </div>
        <SubmitButton>Sign in</SubmitButton>
      </form>
    </AuthShell>
  );
}
