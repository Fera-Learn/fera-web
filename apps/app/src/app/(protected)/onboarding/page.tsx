import { AlertCircle, Building04, PlusCircle } from "@untitledui/icons";
import { redirect } from "next/navigation";

import { OnboardingForm } from "@/components/dashboard/onboarding-form";
import {
  getDashboardContext,
  getSearchParam,
  resolveSearchParams,
  type RouteSearchParams,
} from "@/lib/dashboard/access";

interface OnboardingPageProps {
  searchParams?: Promise<RouteSearchParams>;
}

export default async function OnboardingPage({
  searchParams,
}: OnboardingPageProps) {
  const [{ access }, params] = await Promise.all([
    getDashboardContext("/onboarding"),
    resolveSearchParams(searchParams),
  ]);

  if (access.length) {
    redirect("/dashboard");
  }

  const error = getSearchParam(params, "error");
  const defaultName = getSearchParam(params, "name");
  const defaultSlug = getSearchParam(params, "slug");
  const defaultType = getSearchParam(params, "type") ?? "university";
  const defaultTimezone = getSearchParam(params, "timezone") ?? "Europe/London";
  const defaultAcademicYear =
    getSearchParam(params, "defaultAcademicYear") ?? "2026/27";

  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/70">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
          Institution onboarding
        </div>
        <h2 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
          Create your institution workspace.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          Start with the essentials. You can refine departments, courses, staff, and student setup once the workspace is open.
        </p>

        <div className="mt-8 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
          {[
            "Create the workspace and become the first owner.",
            "Confirm defaults such as timezone and academic year.",
            "Return later to add departments, courses, staff, and students.",
          ].map((item) => (
            <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50" key={item}>
              <PlusCircle className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/70 dark:text-white">
        <div className="flex items-start gap-4">
          <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            <Building04 className="size-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Institution setup</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Workspace details
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              These defaults keep the workspace consistent for future academic administration.
            </p>
          </div>
        </div>

        {error ? (
          <div className="mt-6 flex gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
            <AlertCircle className="mt-0.5 size-5 shrink-0" />
            <p>{error}</p>
          </div>
        ) : null}

        <OnboardingForm
          defaults={{
            defaultAcademicYear,
            name: defaultName,
            slug: defaultSlug,
            timezone: defaultTimezone,
            type: defaultType,
          }}
        />
      </section>
    </div>
  );
}
