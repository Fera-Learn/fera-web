export const DEFAULT_DASHBOARD_APP_URL = "http://localhost:3000";
export const DEFAULT_AUTH_APP_URL = "http://localhost:3001";

export interface SupabasePublicConfig {
  url: string;
  publishableKey: string;
}

export interface FeraAppUrls {
  dashboardAppUrl: string;
  authAppUrl: string;
}

export function getSupabasePublicConfig(): SupabasePublicConfig {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  }

  if (!publishableKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  }

  return { url, publishableKey };
}

export function getFeraAppUrls(): FeraAppUrls {
  return {
    dashboardAppUrl:
      process.env.NEXT_PUBLIC_DASHBOARD_APP_URL ?? DEFAULT_DASHBOARD_APP_URL,
    authAppUrl: process.env.NEXT_PUBLIC_AUTH_APP_URL ?? DEFAULT_AUTH_APP_URL,
  };
}
