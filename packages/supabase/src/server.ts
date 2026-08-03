import { createServerClient } from "@supabase/ssr";

import { getSupabasePublicConfig } from "./config";
import type { Database } from "./database.types";

export interface SupabaseCookie {
  name: string;
  value: string;
}

export interface SupabaseCookieToSet extends SupabaseCookie {
  options: unknown;
}

export interface SupabaseCookieMethods {
  getAll: () => SupabaseCookie[];
  setAll?: (cookies: SupabaseCookieToSet[]) => void;
}

export function createSupabaseServerClient(
  cookieMethods: SupabaseCookieMethods,
) {
  const { url, publishableKey } = getSupabasePublicConfig();

  return createServerClient<Database>(url, publishableKey, {
    cookies: {
      getAll() {
        return cookieMethods.getAll();
      },
      setAll(cookiesToSet) {
        cookieMethods.setAll?.(cookiesToSet as SupabaseCookieToSet[]);
      },
    },
  });
}
