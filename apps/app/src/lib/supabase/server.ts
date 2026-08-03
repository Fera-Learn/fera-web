import { createSupabaseServerClient } from "@repo/supabase/server";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createSupabaseServerClient({
    getAll() {
      return cookieStore.getAll();
    },
    setAll(cookiesToSet) {
      for (const { name, value, options } of cookiesToSet) {
        try {
          cookieStore.set(
            name,
            value,
            options as Parameters<typeof cookieStore.set>[2],
          );
        } catch {
          // Server Components cannot always set cookies; middleware/auth routes can.
        }
      }
    },
  });
}
