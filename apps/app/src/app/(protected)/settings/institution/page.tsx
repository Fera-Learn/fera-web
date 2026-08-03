import {
  Building04,
  CheckCircle,
  Clock,
  Globe01,
  ShieldTick,
} from "@untitledui/icons";
import { redirect } from "next/navigation";
import type { ComponentType, SVGProps } from "react";

import {
  formatInstitutionType,
  formatRole,
  getActiveInstitution,
  getDashboardContext,
  getSearchParam,
  resolveSearchParams,
  type RouteSearchParams,
} from "@/lib/dashboard/access";

interface InstitutionSettingsPageProps {
  searchParams?: Promise<RouteSearchParams>;
}

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export default async function InstitutionSettingsPage({
  searchParams,
}: InstitutionSettingsPageProps) {
  const [{ access }, params] = await Promise.all([
    getDashboardContext("/settings/institution"),
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
    <div className="mx-auto grid max-w-6xl gap-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
              Institution settings
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {institution.name}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              Review the core details used across the workspace. Deeper academic configuration can be added as the institution setup grows.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 lg:min-w-72 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300">
            <p className="font-medium text-slate-950 dark:text-white">Your membership</p>
            <div className="mt-4 grid gap-3">
              <DetailRow label="Role" value={formatRole(activeAccess.role)} />
              <DetailRow label="Membership" value={activeAccess.membershipKind} />
              <DetailRow label="Status" value="active" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/70 dark:text-white">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              <Building04 className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Profile</p>
              <h3 className="text-xl font-semibold tracking-tight">Institution record</h3>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <SettingRow label="Name" value={institution.name} />
            <SettingRow label="URL slug" value={institution.slug} />
            <SettingRow label="Type" value={formatInstitutionType(institution.type)} />
            <SettingRow label="Status" value={institution.status} />
            <SettingRow
              label="Primary domain"
              value={institution.primary_domain ?? "Not set"}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/70 dark:text-white">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              <Globe01 className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Defaults</p>
              <h3 className="text-xl font-semibold tracking-tight">Operating settings</h3>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <SettingRow label="Timezone" value={institution.timezone} />
            <SettingRow
              label="Academic year"
              value={institution.default_academic_year}
            />
            <SettingRow
              label="Country code"
              value={institution.country_code ?? "Not set"}
            />
            <SettingRow
              label="Created"
              value={new Intl.DateTimeFormat("en-GB", {
                dateStyle: "medium",
              }).format(new Date(institution.created_at))}
            />
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <InfoCard
          description="Only assigned members can access this institution workspace."
          icon={ShieldTick}
          title="Member access"
        />
        <InfoCard
          description="The first owner role is ready for institution administration."
          icon={CheckCircle}
          title="Owner assigned"
        />
        <InfoCard
          description="Administrative changes can be tracked as configuration expands."
          icon={Clock}
          title="Change history"
        />
      </section>
    </div>
  );
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0 dark:border-slate-800">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <p className="text-right text-sm font-semibold text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-500 dark:text-slate-400">{label}</span>
      <span className="font-medium capitalize text-slate-950 dark:text-white">{value}</span>
    </div>
  );
}

function InfoCard({
  description,
  icon: Icon,
  title,
}: {
  description: string;
  icon: Icon;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <Icon className="size-5 text-blue-600 dark:text-blue-400" />
      <h3 className="mt-4 font-semibold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
