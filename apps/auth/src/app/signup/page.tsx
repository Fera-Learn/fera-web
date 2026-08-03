import {
  AuthTextLink,
  AuthNotice,
  AuthShell,
} from "@/components/auth/auth-shell";
import { Field, SubmitButton } from "@/components/auth/auth-form";
import { signup } from "@/lib/auth/actions";
import {
  getAuthSearchParams,
  getSearchParam,
  type AuthSearchParams,
} from "@/lib/auth/search-params";

interface SignupPageProps {
  searchParams?: AuthSearchParams;
}

export default async function SignupPage({ searchParams }: SignupPageProps) {
  const params = await getAuthSearchParams(searchParams);
  const error = getSearchParam(params, "error");
  const next = getSearchParam(params, "next") ?? "/";
  const email = getSearchParam(params, "email");

  return (
    <AuthShell
      description="Create your Fera account. Institution setup and invite acceptance are handled after authentication."
      eyebrow="Create account"
      footer={
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>Already have an account?</span>
          <AuthTextLink href={`/login?next=${encodeURIComponent(next)}`}>
            Sign in
          </AuthTextLink>
        </div>
      }
      title="Join Fera"
    >
      {error ? <AuthNotice type="error">{error}</AuthNotice> : null}
      <form action={signup} className="grid gap-5">
        <input name="next" type="hidden" value={next} />
        <Field autoComplete="name" label="Full name" name="displayName" />
        <Field
          autoComplete="email"
          defaultValue={email}
          label="Email"
          name="email"
          type="email"
        />
        <Field
          autoComplete="new-password"
          label="Password"
          name="password"
          type="password"
        />
        <Field
          autoComplete="new-password"
          label="Confirm password"
          name="confirmPassword"
          type="password"
        />
        <SubmitButton>Create account</SubmitButton>
      </form>
    </AuthShell>
  );
}
