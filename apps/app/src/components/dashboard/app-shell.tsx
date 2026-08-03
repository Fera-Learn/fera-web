"use client";

import {
  Building04,
  ChevronDown,
  GraduationHat01,
  HomeLine,
  LogOut01,
  PlusCircle,
  Settings01,
  Users01,
} from "@untitledui/icons";
import { getFeraAppUrls } from "@repo/supabase/config";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
  type SVGProps,
} from "react";

import { Button } from "@/components/untitled-ui/base/buttons/button";
import { Select } from "@/components/untitled-ui/base/select/select";
import {
  canManageInstitutionSettings,
  canViewStaff,
  formatInstitutionType,
  formatRole,
  getActiveInstitution,
  type InstitutionAccess,
} from "@/lib/dashboard/institutions";

interface AppShellProps {
  access: InstitutionAccess[];
  children: ReactNode;
  userEmail: string | null;
}

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const navItems: Array<{ href: string; label: string; icon: Icon }> = [
  { href: "/dashboard", label: "Dashboard", icon: HomeLine },
  { href: "/staff", label: "Staff", icon: Users01 },
  {
    href: "/settings/institution",
    label: "Institution settings",
    icon: Settings01,
  },
];

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function AppShell({ access, children, userEmail }: AppShellProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const primaryAccess = getActiveInstitution(
    access,
    searchParams.get("institution") ?? undefined,
  );
  const { authAppUrl } = getFeraAppUrls();
  const logoutUrl = new URL("/logout", authAppUrl).toString();
  const settingsUrl = primaryAccess
    ? getInstitutionHref("/settings/institution")
    : "/onboarding";
  const visibleNavItems = navItems.filter((item) => {
    if (item.href === "/staff") {
      return canViewStaff(primaryAccess);
    }

    if (item.href === "/settings/institution") {
      return canManageInstitutionSettings(primaryAccess);
    }

    return true;
  });

  useEffect(() => {
    if (!accountMenuOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!accountMenuRef.current?.contains(event.target as Node)) {
        setAccountMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setAccountMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [accountMenuOpen]);

  function getInstitutionHref(href: string) {
    if (!primaryAccess) {
      return href;
    }

    return `${href}?institution=${primaryAccess.institution.id}`;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[17rem_1fr]">
        <aside className="border-b border-slate-200 bg-white/95 lg:border-b-0 lg:border-r dark:border-slate-800 dark:bg-slate-950">
          <div className="flex h-full flex-col gap-6 px-5 py-6">
            <header className="grid gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
              <div className="flex items-start gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-blue-600 text-white shadow-sm dark:bg-blue-500">
                  <GraduationHat01 className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">Fera Academy</p>
                  <p className="mt-1 truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                    {primaryAccess?.institution.name ?? "Institution onboarding"}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                    {primaryAccess
                      ? `${formatInstitutionType(primaryAccess.institution.type)} - ${formatRole(primaryAccess.role)}`
                      : "Create your first institution"}
                  </p>
                </div>
              </div>

              {access.length > 1 ? (
                <form action="/dashboard" className="grid gap-2" method="get">
                  <Select
                    aria-label="Switch institution"
                    defaultSelectedKey={primaryAccess?.institution.id}
                    name="institution"
                    size="sm"
                  >
                    {access.map(({ institution, membershipKind, role }) => (
                      <Select.Item
                        id={institution.id}
                        key={institution.id}
                        label={`${institution.name} - ${membershipKind === "student" ? "Student" : formatRole(role)}`}
                      />
                    ))}
                  </Select>
                  <Button color="secondary" size="sm" type="submit">
                    Switch
                  </Button>
                </form>
              ) : !access.length ? (
                <Link
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                  href="/onboarding"
                >
                  <PlusCircle className="size-4" />
                  Create institution
                </Link>
              ) : null}
            </header>

            <nav className="grid gap-2">
              {visibleNavItems.map(({ href, label, icon: IconComponent }) => {
                const active = pathname === href || pathname.startsWith(`${href}/`);

                return (
                  <Link
                    className={[
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                      active
                        ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white",
                    ].join(" ")}
                    href={getInstitutionHref(href)}
                    key={href}
                  >
                    <IconComponent className="size-4" />
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="relative mt-auto border-t border-slate-200 pt-4 text-sm dark:border-slate-800" ref={accountMenuRef}>
              {accountMenuOpen ? (
                <div
                  className="absolute inset-x-0 bottom-full z-20 mb-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg ring-1 ring-black/5 dark:border-slate-800 dark:bg-slate-900"
                  role="menu"
                >
                  <div className="border-b border-slate-200 px-3 py-3 dark:border-slate-800">
                    <p className="truncate text-sm font-semibold text-slate-950 dark:text-white">
                      {userEmail ?? "Fera user"}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {primaryAccess?.institution.name ?? "Institution onboarding"}
                    </p>
                  </div>

                  <div className="grid gap-1 p-1.5">
                    <Link
                      className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                      href={settingsUrl}
                      onClick={() => setAccountMenuOpen(false)}
                      role="menuitem"
                    >
                      <Settings01 className="size-4 text-slate-400" />
                      Settings
                    </Link>
                    <Link
                      className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                      href={logoutUrl}
                      onClick={() => setAccountMenuOpen(false)}
                      role="menuitem"
                    >
                      <LogOut01 className="size-4 text-slate-400" />
                      Sign out
                    </Link>
                  </div>
                </div>
              ) : null}

              <button
                aria-expanded={accountMenuOpen}
                aria-haspopup="menu"
                className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-slate-100 dark:hover:bg-slate-900"
                onClick={() => setAccountMenuOpen((isOpen) => !isOpen)}
                type="button"
              >
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-800">
                  {getInitials(userEmail ?? "Fera user") || "FU"}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-950 dark:text-white">
                    {userEmail ?? "Fera user"}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Account</p>
                </div>
                <ChevronDown
                  className={[
                    "size-4 text-slate-400 transition",
                    accountMenuOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>
            </div>
          </div>
        </aside>

        <main className="min-w-0 bg-slate-50 dark:bg-slate-950">
          <div className="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Workspace</p>
                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {primaryAccess?.institution.name ?? "Institution onboarding"}
                </h1>
              </div>
              {primaryAccess ? (
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  <Building04 className="size-4 text-blue-600 dark:text-blue-400" />
                  {formatInstitutionType(primaryAccess.institution.type)}
                </div>
              ) : null}
            </div>
          </div>
          <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
