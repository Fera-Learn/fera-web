import { getFeraAppUrls } from "@repo/supabase/config";

import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function HealthPage() {
  const appUrls = getFeraAppUrls();
  let status = "configured";
  let sessionState = "not checked";
  let errorMessage: string | null = null;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      status = "error";
      errorMessage = error.message;
    } else {
      sessionState = data.session ? "authenticated" : "anonymous";
    }
  } catch (error) {
    status = "missing configuration";
    errorMessage = error instanceof Error ? error.message : "Unknown error";
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <p className="text-sm font-medium text-cyan-300">Fera Auth</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Supabase health check
        </h1>
        <dl className="mt-6 grid gap-4 text-sm">
          <div>
            <dt className="text-slate-400">Supabase</dt>
            <dd className="font-medium">{status}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Session</dt>
            <dd className="font-medium">{sessionState}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Dashboard URL</dt>
            <dd className="font-medium">{appUrls.dashboardAppUrl}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Auth URL</dt>
            <dd className="font-medium">{appUrls.authAppUrl}</dd>
          </div>
        </dl>
        {errorMessage ? (
          <p className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </main>
  );
}
