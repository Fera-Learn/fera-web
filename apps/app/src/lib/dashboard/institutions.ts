import type { Tables } from "@repo/supabase/database.types";

export type Institution = Pick<
  Tables<"institutions">,
  | "id"
  | "name"
  | "slug"
  | "type"
  | "status"
  | "timezone"
  | "default_academic_year"
  | "primary_domain"
  | "country_code"
  | "created_at"
  | "updated_at"
>;

export interface InstitutionAccess {
  membershipId: string;
  membershipKind: "staff" | "student";
  role: string;
  permissions: string[];
  studentNumber?: string;
  joinedAt: string | null;
  institution: Institution;
}

export const STAFF_INVITE_ROLE_OPTIONS = [
  { value: "admin", label: "Admin" },
  { value: "department_admin", label: "Department admin" },
  { value: "programme_lead", label: "Programme lead" },
  { value: "module_lead", label: "Module lead" },
  { value: "lecturer", label: "Lecturer" },
  { value: "teaching_assistant", label: "Teaching assistant" },
  { value: "department_staff", label: "Department staff" },
  { value: "viewer", label: "Viewer" },
] as const;

const ROLE_PERMISSIONS: Record<string, string[]> = {
  owner: [
    "institution.manage_settings",
    "staff.invite",
    "staff.manage_roles",
    "staff.view",
    "students.create",
    "students.import",
    "students.update",
    "courses.create",
    "courses.update",
    "modules.create",
    "modules.update",
    "reports.view",
    "audit.view",
  ],
  admin: [
    "institution.manage_settings",
    "staff.invite",
    "staff.manage_roles",
    "staff.view",
    "students.create",
    "students.import",
    "students.update",
    "courses.create",
    "courses.update",
    "modules.create",
    "modules.update",
    "reports.view",
    "audit.view",
  ],
  department_admin: [
    "staff.view",
    "students.update",
    "courses.create",
    "courses.update",
    "modules.create",
    "modules.update",
    "reports.view",
  ],
  programme_lead: [
    "staff.view",
    "students.update",
    "courses.update",
    "modules.update",
    "reports.view",
  ],
  module_lead: ["staff.view", "modules.update", "reports.view"],
  lecturer: ["staff.view", "modules.update", "reports.view"],
  teaching_assistant: ["staff.view", "reports.view"],
  department_staff: ["staff.view", "reports.view"],
  viewer: ["staff.view"],
};

export const INSTITUTION_TYPES = [
  { value: "university", label: "University" },
  { value: "sixth_form", label: "Sixth form" },
  { value: "a_levels", label: "A-Levels provider" },
  { value: "t_levels", label: "T-Levels provider" },
  {
    value: "further_education_college",
    label: "Further education college",
  },
  { value: "college", label: "College" },
  { value: "secondary_school", label: "Secondary school" },
  { value: "school", label: "School" },
  { value: "independent_school", label: "Independent school" },
  { value: "international_school", label: "International school" },
  { value: "apprenticeship_provider", label: "Apprenticeship provider" },
  { value: "vocational_provider", label: "Vocational provider" },
  { value: "training_provider", label: "Training provider" },
  { value: "online_provider", label: "Online provider" },
  { value: "tutoring_centre", label: "Tutoring centre" },
  { value: "language_school", label: "Language school" },
  { value: "adult_education", label: "Adult education provider" },
] as const;

export const ACADEMIC_YEAR_OPTIONS = [
  "2024/25",
  "2025/26",
  "2026/27",
  "2027/28",
  "2028/29",
  "2029/30",
  "2030/31",
  "2031/32",
] as const;

export const TIMEZONE_OPTIONS = [
  { value: "Europe/London", label: "Europe/London (UK)" },
  { value: "Europe/Dublin", label: "Europe/Dublin" },
  { value: "Europe/Paris", label: "Europe/Paris" },
  { value: "Europe/Berlin", label: "Europe/Berlin" },
  { value: "Europe/Madrid", label: "Europe/Madrid" },
  { value: "Europe/Rome", label: "Europe/Rome" },
  { value: "Europe/Amsterdam", label: "Europe/Amsterdam" },
  { value: "Europe/Zurich", label: "Europe/Zurich" },
  { value: "UTC", label: "UTC" },
  { value: "America/New_York", label: "America/New_York" },
  { value: "America/Chicago", label: "America/Chicago" },
  { value: "America/Los_Angeles", label: "America/Los_Angeles" },
  { value: "Asia/Dubai", label: "Asia/Dubai" },
  { value: "Asia/Kolkata", label: "Asia/Kolkata" },
  { value: "Asia/Singapore", label: "Asia/Singapore" },
  { value: "Asia/Hong_Kong", label: "Asia/Hong_Kong" },
  { value: "Asia/Tokyo", label: "Asia/Tokyo" },
  { value: "Australia/Sydney", label: "Australia/Sydney" },
  { value: "Africa/Johannesburg", label: "Africa/Johannesburg" },
] as const;

export function slugifyInstitutionName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 64);
}

export function isInstitutionType(value: string) {
  return INSTITUTION_TYPES.some((type) => type.value === value);
}

export function isAcademicYear(value: string) {
  return ACADEMIC_YEAR_OPTIONS.some((academicYear) => academicYear === value);
}

export function isTimezone(value: string) {
  return TIMEZONE_OPTIONS.some((timezone) => timezone.value === value);
}

export function isStaffInviteRole(value: string) {
  return STAFF_INVITE_ROLE_OPTIONS.some((role) => role.value === value);
}

export function getRolePermissions(role: string) {
  return ROLE_PERMISSIONS[role] ?? [];
}

export function hasInstitutionPermission(
  access: InstitutionAccess | null,
  permission: string,
) {
  if (!access || access.membershipKind !== "staff") {
    return false;
  }

  return (
    access.role === "owner" ||
    access.role === "admin" ||
    access.permissions.includes(permission) ||
    getRolePermissions(access.role).includes(permission)
  );
}

export function canInviteStaff(access: InstitutionAccess | null) {
  return hasInstitutionPermission(access, "staff.invite");
}

export function canViewStaff(access: InstitutionAccess | null) {
  return hasInstitutionPermission(access, "staff.view");
}

export function canManageInstitutionSettings(access: InstitutionAccess | null) {
  return hasInstitutionPermission(access, "institution.manage_settings");
}

export function getActiveInstitution(
  access: InstitutionAccess[],
  requestedInstitution?: string,
) {
  if (!access.length) {
    return null;
  }

  if (!requestedInstitution) {
    return access[0];
  }

  return (
    access.find(
      ({ institution }) =>
        institution.id === requestedInstitution ||
        institution.slug === requestedInstitution,
    ) ?? access[0]
  );
}

export function formatInstitutionType(type: string) {
  const institutionType = INSTITUTION_TYPES.find((item) => item.value === type);

  return institutionType?.label ?? type;
}

export function formatRole(role: string) {
  const labels: Record<string, string> = {
    owner: "Owner",
    admin: "Admin",
    department_admin: "Department admin",
    programme_lead: "Programme lead",
    module_lead: "Module lead",
    lecturer: "Lecturer",
    teaching_assistant: "Teaching assistant",
    department_staff: "Department staff",
    viewer: "Viewer",
    student: "Student",
  };

  return labels[role] ?? role;
}
