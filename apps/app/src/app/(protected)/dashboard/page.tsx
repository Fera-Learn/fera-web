import {
  Building04,
  CheckCircle,
  GraduationHat01,
  LayersThree01,
  Settings01,
  ShieldTick,
  Users01,
} from "@untitledui/icons";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { ComponentType, SVGProps } from "react";

import { Button } from "@/components/untitled-ui/base/buttons/button";
import { Select } from "@/components/untitled-ui/base/select/select";
import { SelectItem } from "@/components/untitled-ui/base/select/select-item";
import {
  formatInstitutionType,
  formatRole,
  getActiveInstitution,
  getDashboardContext,
  getSearchParam,
  resolveSearchParams,
  type RouteSearchParams,
} from "@/lib/dashboard/access";

interface DashboardPageProps {
  searchParams?: Promise<RouteSearchParams>;
}

const setupCards = [
  {
    title: "Academic structure",
    description: "Set up departments, courses, levels, and modules as the next foundation.",
    icon: Building04,
  },
  {
    title: "People",
    description: "Invite staff and prepare student enrolment when your structure is ready.",
    icon: Users01,
  },
  {
    title: "Teaching activity",
    description: "Use the workspace for module delivery, attendance, assignments, and feedback.",
    icon: LayersThree01,
  },
];

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const [{ access }, params] = await Promise.all([
    getDashboardContext("/dashboard"),
    resolveSearchParams(searchParams),
  ]);

  if (!access.length) {
    redirect("/onboarding");
  }

  const activeAccess = getActiveInstitution(
    access,
    getSearchParam(params, "institution"),
  );

  if (!activeAccess) {
    redirect("/onboarding");
  }

  const { institution } = activeAccess;

  return (
    <div className="grid gap-6">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
              Dashboard
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              {institution.name}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              Your institution workspace is ready. Keep the first setup simple: confirm the institution details, then add the academic structure and people who will use the platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                {formatInstitutionType(institution.type)}
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 capitalize text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/50 dark:text-emerald-300">
                {institution.status}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                {formatRole(activeAccess.role)}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/50">
            <p className="text-sm font-medium text-slate-950 dark:text-white">Institution switcher</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Choose the workspace you want to manage.
            </p>
            <form action="/dashboard" className="mt-4 grid gap-3" method="get">
              <Select
                aria-label="Institution"
                defaultSelectedKey={institution.id}
                name="institution"
              >
                {access.map((item) => (
                  <SelectItem
                    id={item.institution.id}
                    key={item.institution.id}
                    label={`${item.institution.name} - ${formatRole(item.role)}`}
                  />
                ))}
              </Select>
              <Button size="sm" type="submit">
                Open selected institution
              </Button>
            </form>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <p className="font-medium text-slate-950 dark:text-white">Access is institution-specific</p>
              <p className="mt-2">
                Members only see the institution workspaces assigned to their account.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <MetricCard
          description="Created by onboarding"
          icon={CheckCircle}
          label="Workspace"
          value="Ready"
        />
        <MetricCard
          description="Active institution role"
          icon={GraduationHat01}
          label="Access"
          value={formatRole(activeAccess.role)}
        />
        <MetricCard
          description="Institution-specific access"
          icon={ShieldTick}
          label="Privacy"
          value="Scoped"
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {setupCards.map(({ title, description, icon: Icon }) => (
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70" key={title}>
            <div className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-5 font-semibold text-slate-950 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/70 dark:text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Next setup step</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Review institution settings
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              Confirm the institution slug, timezone, academic year, and owner role before adding academic structure.
            </p>
          </div>
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            href={`/settings/institution?institution=${institution.id}`}
          >
            <Settings01 className="size-4" />
            Open settings
          </Link>
        </div>
      </section>
    </div>
  );
}

function MetricCard({
  description,
  icon: Icon,
  label,
  value,
}: {
  description: string;
  icon: Icon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{label}</p>
        <Icon className="size-5 text-blue-600 dark:text-blue-400" />
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  );
}
