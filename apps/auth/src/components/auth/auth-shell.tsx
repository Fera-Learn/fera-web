import Link from "next/link";
import type { ReactNode } from "react";

interface AuthShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  footer,
}: AuthShellProps) {
  return (
    <main className="min-h-screen bg-[#080b12] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-cyan-950/30 lg:grid-cols-[1fr_0.9fr]">
          <section className="hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.28),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.9),_rgba(8,11,18,1))] p-10 lg:block">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                  Fera Academy
                </div>
                <h2 className="mt-8 max-w-md text-4xl font-semibold tracking-tight text-white">
                  Academic operations without the admin drag.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                  Secure access for institutions, staff, and students. Built for
                  courses, modules, attendance, assessments, and feedback.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
                <p className="font-medium text-white">Secure access</p>
                <p className="mt-2">
                  Sign in, accept invitations, and move into the right
                  institution workspace with scoped staff or student access.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white p-6 text-slate-950 sm:p-10">
            <div className="mx-auto max-w-md">
              <p className="text-sm font-medium text-cyan-700">{eyebrow}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight">
                {title}
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
              <div className="mt-8">{children}</div>
              {footer ? (
                <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
                  {footer}
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export function AuthNotice({
  type,
  children,
}: {
  type: "error" | "success";
  children: ReactNode;
}) {
  const className =
    type === "error"
      ? "border-red-200 bg-red-50 text-red-800"
      : "border-emerald-200 bg-emerald-50 text-emerald-800";

  return (
    <div className={`mb-5 rounded-xl border px-4 py-3 text-sm ${className}`}>
      {children}
    </div>
  );
}

export function AuthTextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="font-medium text-cyan-700 hover:text-cyan-900" href={href}>
      {children}
    </Link>
  );
}
