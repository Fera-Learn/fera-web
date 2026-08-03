import { getFeraAppUrls } from "@repo/supabase/config";
import type { Tables } from "@repo/supabase/database.types";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import type { Institution, InstitutionAccess } from "./institutions";
export {
  canInviteStaff,
  canManageInstitutionSettings,
  canViewStaff,
  formatInstitutionType,
  formatRole,
  getActiveInstitution,
  type Institution,
  type InstitutionAccess,
} from "./institutions";

export type RouteSearchParams = Record<string, string | string[] | undefined>;

type StaffMembership = Tables<"staff_institution_memberships">;
type StudentMembership = Tables<"student_institution_memberships">;

type StaffMembershipRow = Pick<
  StaffMembership,
  "id" | "role" | "permissions" | "status" | "joined_at"
> & {
  institution: Institution | null;
};

type StudentMembershipRow = Pick<
  StudentMembership,
  "id" | "status" | "student_number" | "joined_at"
> & {
  institution: Institution | null;
};

export interface DashboardContext {
  user: {
    id: string;
    email: string | null;
  };
  access: InstitutionAccess[];
}

export function getLoginUrl(nextPath = "/") {
  const { authAppUrl } = getFeraAppUrls();
  const loginUrl = new URL("/login", authAppUrl);
  loginUrl.searchParams.set("next", nextPath);

  return loginUrl.toString();
}

export async function getDashboardContext(nextPath = "/"): Promise<DashboardContext> {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect(getLoginUrl(nextPath));
  }

  const [staffResult, studentResult] = await Promise.all([
    supabase
      .from("staff_institution_memberships")
      .select(
        `
          id,
          role,
          permissions,
          status,
          joined_at,
          institution:institutions (
            id,
            name,
            slug,
            type,
            status,
            timezone,
            default_academic_year,
            primary_domain,
            country_code,
            created_at,
            updated_at
          )
        `,
      )
      .eq("user_id", user.id)
      .eq("status", "active")
      .is("archived_at", null)
      .order("created_at", { ascending: true }),
    supabase
      .from("student_institution_memberships")
      .select(
        `
          id,
          status,
          student_number,
          joined_at,
          institution:institutions (
            id,
            name,
            slug,
            type,
            status,
            timezone,
            default_academic_year,
            primary_domain,
            country_code,
            created_at,
            updated_at
          )
        `,
      )
      .eq("user_id", user.id)
      .eq("status", "active")
      .is("archived_at", null)
      .order("created_at", { ascending: true }),
  ]);

  if (staffResult.error) {
    throw new Error(`Could not load staff memberships: ${staffResult.error.message}`);
  }

  if (studentResult.error) {
    throw new Error(
      `Could not load student memberships: ${studentResult.error.message}`,
    );
  }

  const staffAccess = ((staffResult.data ?? []) as unknown as StaffMembershipRow[])
    .filter((membership) => membership.institution)
    .map((membership) => ({
      membershipId: membership.id,
      membershipKind: "staff" as const,
      role: membership.role,
      permissions: membership.permissions,
      joinedAt: membership.joined_at,
      institution: membership.institution as Institution,
    }));

  const studentAccess = (
    (studentResult.data ?? []) as unknown as StudentMembershipRow[]
  )
    .filter((membership) => membership.institution)
    .map((membership) => ({
      membershipId: membership.id,
      membershipKind: "student" as const,
      role: "student",
      permissions: [],
      studentNumber: membership.student_number,
      joinedAt: membership.joined_at,
      institution: membership.institution as Institution,
    }));

  return {
    user: {
      id: user.id,
      email: user.email ?? null,
    },
    access: [...staffAccess, ...studentAccess],
  };
}

export async function resolveSearchParams(
  searchParams?: Promise<RouteSearchParams> | RouteSearchParams,
) {
  return searchParams ? await searchParams : {};
}

export function getSearchParam(
  searchParams: RouteSearchParams,
  key: string,
) {
  const value = searchParams[key];

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
