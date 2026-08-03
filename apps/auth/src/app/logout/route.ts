import { redirect } from "next/navigation";

import { getRedirectWithMessage } from "@/lib/auth/redirects";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect(
    getRedirectWithMessage("/login", { message: "You have signed out." }),
  );
}

export async function POST() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect(
    getRedirectWithMessage("/login", { message: "You have signed out." }),
  );
}
