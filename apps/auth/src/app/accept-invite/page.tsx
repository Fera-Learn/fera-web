import Link from "next/link";

import { AuthNotice, AuthShell, AuthTextLink } from "@/components/auth/auth-shell";
import { SubmitButton } from "@/components/auth/auth-form";
import { acceptStaffInvitation } from "@/lib/auth/actions";
import {
  getAuthSearchParams,
  getSearchParam,
  type AuthSearchParams,
} from "@/lib/auth/search-params";
import { createClient } from "@/lib/supabase/server";

interface AcceptInvitePageProps {
  searchParams?: AuthSearchParams;
}

interface StaffInvitationDetails {
  invitation_id: string;
  institution_id: string;
  institution_name: string;
  invited_email: string;
  invited_display_name: string | null;
  role: string;
  status: string;
  expires_at: string;
  accepted_at: string | null;
}

export default async function AcceptInvitePage({
  searchParams,
}: AcceptInvitePageProps) {
  const params = await getAuthSearchParams(searchParams);
  const token = getSearchParam(params, "token") ?? "";
  const error = getSearchParam(params, "error");
  const nextPath = token
    ? `/accept-invite?token=${encodeURIComponent(token)}`
    : "/accept-invite";
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let invitation: StaffInvitationDetails | null = null;
  let inviteError: string | null = null;

  if (!token) {
    inviteError = "This invitation link is missing its token.";
  } else {
    const { data, error: rpcError } = await supabase
      .rpc("get_staff_invitation_by_token", { p_token: token })
      .maybeSingle();

    if (rpcError) {
      inviteError = rpcError.message;
    } else if (!data) {
      inviteError = "This invitation link is invalid or has been revoked.";
    } else {
      invitation = data as StaffInvitationDetails;
    }
  }

  const invitedEmail = invitation?.invited_email;
  const signedInWithInvitedEmail =
    user?.email && invitedEmail
      ? user.email.toLowerCase() === invitedEmail.toLowerCase()
      : false;

  return (
    <AuthShell
      description="Accept your staff invitation and join the institution workspace connected to your account."
      eyebrow="Staff invitation"
      footer={
        user ? (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>Need a different account?</span>
            <AuthTextLink href="/logout">Sign out</AuthTextLink>
          </div>
        ) : undefined
      }
      title="Accept invitation"
    >
      {error ? <AuthNotice type="error">{error}</AuthNotice> : null}
      {inviteError ? <AuthNotice type="error">{inviteError}</AuthNotice> : null}

      {invitation ? (
        <div className="grid gap-5">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
            <p className="font-semibold text-slate-950">{invitation.institution_name}</p>
            <dl className="mt-4 grid gap-3">
              <InviteDetail label="Invited email" value={invitation.invited_email} />
              <InviteDetail label="Role" value={formatRole(invitation.role)} />
              <InviteDetail label="Status" value={invitation.status} />
              <InviteDetail label="Expires" value={formatDate(invitation.expires_at)} />
            </dl>
          </div>

          {invitation.status !== "pending" ? (
            <AuthNotice type="error">
              This invitation is {invitation.status}. Ask an institution admin for a new invitation if you still need access.
            </AuthNotice>
          ) : !user ? (
            <div className="grid gap-3">
              <Link
                className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                href={`/login?next=${encodeURIComponent(nextPath)}&email=${encodeURIComponent(invitation.invited_email)}`}
              >
                Sign in to accept
              </Link>
              <Link
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                href={`/signup?next=${encodeURIComponent(nextPath)}&email=${encodeURIComponent(invitation.invited_email)}`}
              >
                Create account
              </Link>
            </div>
          ) : !signedInWithInvitedEmail ? (
            <AuthNotice type="error">
              You are signed in as {user.email}. Sign in with {invitation.invited_email} to accept this invitation.
            </AuthNotice>
          ) : (
            <form action={acceptStaffInvitation}>
              <input name="token" type="hidden" value={token} />
              <SubmitButton>Accept invitation</SubmitButton>
            </form>
          )}
        </div>
      ) : null}
    </AuthShell>
  );
}

function InviteDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-slate-500">{label}</dt>
      <dd className="text-right font-medium capitalize text-slate-950">{value}</dd>
    </div>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(
    new Date(value),
  );
}

function formatRole(role: string) {
  const labels: Record<string, string> = {
    admin: "Admin",
    department_admin: "Department admin",
    programme_lead: "Programme lead",
    module_lead: "Module lead",
    lecturer: "Lecturer",
    teaching_assistant: "Teaching assistant",
    department_staff: "Department staff",
    viewer: "Viewer",
  };

  return labels[role] ?? role;
}
