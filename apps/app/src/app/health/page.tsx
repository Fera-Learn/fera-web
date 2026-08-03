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
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Fera App</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          System health check
        </h1>
        <dl className="mt-6 grid gap-4 text-sm">
          <div>
            <dt className="text-slate-500 dark:text-slate-400">Supabase</dt>
            <dd className="font-medium">{status}</dd>
          </div>
          <div>
            <dt className="text-slate-500 dark:text-slate-400">Session</dt>
            <dd className="font-medium">{sessionState}</dd>
          </div>
          <div>
            <dt className="text-slate-500 dark:text-slate-400">Dashboard URL</dt>
            <dd className="font-medium">{appUrls.dashboardAppUrl}</dd>
          </div>
          <div>
            <dt className="text-slate-500 dark:text-slate-400">Auth URL</dt>
            <dd className="font-medium">{appUrls.authAppUrl}</dd>
          </div>
        </dl>
        {errorMessage ? (
          <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </main>
  );
}
