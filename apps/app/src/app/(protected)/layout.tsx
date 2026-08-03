import { AppShell } from "@/components/dashboard/app-shell";
import { getDashboardContext } from "@/lib/dashboard/access";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, access } = await getDashboardContext();

  return (
    <AppShell access={access} userEmail={user.email}>
      {children}
    </AppShell>
  );
}
