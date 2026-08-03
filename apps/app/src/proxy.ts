import { getFeraAppUrls } from "@repo/supabase/config";
import { createSupabaseServerClient } from "@repo/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/health"];

export async function proxy(request: NextRequest) {
  if (PUBLIC_PATHS.some((path) => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  let response = NextResponse.next({ request });

  try {
    const supabase = createSupabaseServerClient({
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value } of cookiesToSet) {
          request.cookies.set(name, value);
        }

        response = NextResponse.next({ request });

        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(
            name,
            value,
            options as Parameters<typeof response.cookies.set>[2],
          );
        }
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      return response;
    }
  } catch {
    // If session verification fails, do not expose protected dashboard routes.
  }

  const { authAppUrl } = getFeraAppUrls();
  const loginUrl = new URL("/login", authAppUrl);
  loginUrl.searchParams.set(
    "next",
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
  );

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
