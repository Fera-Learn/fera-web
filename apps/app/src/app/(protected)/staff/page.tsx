import { CheckCircle, Clock, PlusCircle, ShieldTick, Users01 } from "@untitledui/icons";
import { redirect } from "next/navigation";

import { StaffInviteForm } from "@/components/dashboard/staff-invite-form";
import {
  canInviteStaff,
  canViewStaff,
  formatRole,
  getActiveInstitution,
  getDashboardContext,
  getSearchParam,
  resolveSearchParams,
  type RouteSearchParams,
} from "@/lib/dashboard/access";
import { createClient } from "@/lib/supabase/server";

interface StaffPageProps {
  searchParams?: Promise<RouteSearchParams>;
}

interface StaffMembershipRow {
  id: string;
  user_id: string;
  role: string;
  status: string;
  joined_at: string | null;
  created_at: string;
}

interface AccountRow {
  id: string;
  email: string;
  display_name: string;
}

interface InvitationRow {
  id: string;
  invited_email: string;
  invited_display_name: string | null;
  role: string;
  status: string;
  expires_at: string;
  created_at: string;
}

export default async function StaffPage({ searchParams }: StaffPageProps) {
  const [{ access }, params] = await Promise.all([
    getDashboardContext("/staff"),
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

  if (!canViewStaff(activeAccess)) {
    redirect(`/dashboard?institution=${activeAccess.institution.id}`);
  }

  const canInvite = canInviteStaff(activeAccess);
  const institution = activeAccess.institution;
  const supabase = await createClient();

  const staffResult = await supabase
    .from("staff_institution_memberships")
    .select("id, user_id, role, status, joined_at, created_at")
    .eq("institution_id", institution.id)
    .is("archived_at", null)
    .order("created_at", { ascending: true });

  if (staffResult.error) {
    throw new Error(`Could not load staff directory: ${staffResult.error.message}`);
  }

  const staffRows = (staffResult.data ?? []) as StaffMembershipRow[];
  const userIds = staffRows.map((row) => row.user_id);
  const accountsResult = userIds.length
    ? await supabase
        .from("user_accounts")
        .select("id, email, display_name")
        .in("id", userIds)
    : { data: [], error: null };

  if (accountsResult.error) {
    throw new Error(`Could not load staff accounts: ${accountsResult.error.message}`);
  }

  const accountsById = new Map(
    ((accountsResult.data ?? []) as AccountRow[]).map((account) => [account.id, account]),
  );

  const invitationsResult = canInvite
    ? await supabase
        .from("staff_invitations")
        .select("id, invited_email, invited_display_name, role, status, expires_at, created_at")
        .eq("institution_id", institution.id)
        .is("archived_at", null)
        .order("created_at", { ascending: false })
    : { data: [], error: null };

  if (invitationsResult.error) {
    throw new Error(`Could not load staff invitations: ${invitationsResult.error.message}`);
  }

  const invitations = (invitationsResult.data ?? []) as InvitationRow[];
  const error = getSearchParam(params, "error");
  const inviteUrl = getSearchParam(params, "inviteUrl");
  const inviteEmail = getSearchParam(params, "inviteEmail");
  const inviteDefaults = {
    displayName: getSearchParam(params, "displayName"),
    email: getSearchParam(params, "email"),
    role: getSearchParam(params, "role"),
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
              Staff
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              People at {institution.name}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              Keep the staff directory simple at first: invite colleagues, assign a fixed role, and control access through institution-scoped memberships.
            </p>
          </div>
          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 lg:min-w-72 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300">
            <MetricRow label="Active staff" value={String(staffRows.filter((row) => row.status === "active").length)} />
            <MetricRow label="Pending invites" value={String(invitations.filter((invite) => invite.status === "pending").length)} />
            <MetricRow label="Your role" value={formatRole(activeAccess.role)} />
          </div>
        </div>
      </section>

      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
          {error}
        </div>
      ) : null}

      {inviteUrl ? (
        <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-100">
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 size-5 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">Invitation created{inviteEmail ? ` for ${inviteEmail}` : ""}</p>
              <p className="mt-1 text-sm leading-6">
                Send this link to the staff member. The token is shown once and is stored hashed in the database.
              </p>
              <input
                className="mt-3 w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 text-sm text-slate-950 dark:border-emerald-900/60 dark:bg-slate-950 dark:text-white"
                readOnly
                value={inviteUrl}
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-[1fr_22rem]">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3 border-b border-slate-200 p-5 dark:border-slate-800">
            <div className="grid size-10 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              <Users01 className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-950 dark:text-white">Staff directory</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Active and invited staff memberships.</p>
            </div>
          </div>

          {staffRows.length ? (
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {staffRows.map((membership) => {
                const account = accountsById.get(membership.user_id);

                return (
                  <div className="grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-center" key={membership.id}>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-slate-950 dark:text-white">
                        {account?.display_name || account?.email || "Staff member"}
                      </p>
                      <p className="mt-1 truncate text-sm text-slate-500 dark:text-slate-400">
                        {account?.email ?? "Account details pending"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                        {formatRole(membership.role)}
                      </span>
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium capitalize text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/50 dark:text-emerald-300">
                        {membership.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <EmptyState
              description="Invite the first staff member to start building the institution team."
              icon={Users01}
              title="No staff yet"
            />
          )}
        </div>

        <aside className="grid gap-6">
          {canInvite ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                  <PlusCircle className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 dark:text-white">Invite staff</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Create a secure invite link.</p>
                </div>
              </div>
              <div className="mt-5">
                <StaffInviteForm defaults={inviteDefaults} institutionId={institution.id} />
              </div>
            </div>
          ) : null}

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3">
              <ShieldTick className="size-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold text-slate-950 dark:text-white">Access rules</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Owners and admins can invite staff. Invite links expire after 14 days and only the invited email address can accept them.
            </p>
          </div>
        </aside>
      </section>

      {canInvite ? (
        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3 border-b border-slate-200 p-5 dark:border-slate-800">
            <Clock className="size-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-slate-950 dark:text-white">Recent invitations</h3>
          </div>

          {invitations.length ? (
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {invitations.map((invite) => (
                <div className="grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-center" key={invite.id}>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-slate-950 dark:text-white">
                      {invite.invited_display_name || invite.invited_email}
                    </p>
                    <p className="mt-1 truncate text-sm text-slate-500 dark:text-slate-400">
                      {invite.invited_email} - expires {formatDate(invite.expires_at)}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      {formatRole(invite.role)}
                    </span>
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium capitalize text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/50 dark:text-amber-300">
                      {invite.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              description="Created invitations will appear here until they are accepted or expire."
              icon={Clock}
              title="No invitations yet"
            />
          )}
        </section>
      ) : null}
    </div>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{label}</span>
      <span className="font-semibold text-slate-950 dark:text-white">{value}</span>
    </div>
  );
}

function EmptyState({
  description,
  icon: Icon,
  title,
}: {
  description: string;
  icon: typeof Users01;
  title: string;
}) {
  return (
    <div className="grid place-items-center p-8 text-center">
      <Icon className="size-8 text-slate-400" />
      <h3 className="mt-3 font-semibold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(
    new Date(value),
  );
}
