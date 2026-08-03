import { redirect } from "next/navigation";

import { getDashboardRedirect } from "@/lib/auth/redirects";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getSession();

    if (data.session) {
      redirect(getDashboardRedirect("/"));
    }
  } catch {
    // Missing Supabase config should still allow the login page to render its form.
  }

  redirect("/login");
}
