import { getFeraAppUrls } from "@repo/supabase/config";

const AUTH_LOCAL_REDIRECT_PATHS = ["/accept-invite", "/update-password"];

export function getSafeRelativePath(value: FormDataEntryValue | string | null) {
  if (
    typeof value !== "string" ||
    !value.startsWith("/") ||
    value.startsWith("//")
  ) {
    return "/";
  }

  return value;
}

export function getDashboardRedirect(
  next?: FormDataEntryValue | string | null,
) {
  const { dashboardAppUrl } = getFeraAppUrls();
  const safeNext = getSafeRelativePath(next ?? "/");

  return new URL(safeNext, dashboardAppUrl).toString();
}

export function getAuthRedirect(path: string) {
  const { authAppUrl } = getFeraAppUrls();

  return new URL(getSafeRelativePath(path), authAppUrl).toString();
}

export function getAuthCallbackUrl(next: string) {
  const callbackUrl = new URL("/auth/callback", getFeraAppUrls().authAppUrl);
  callbackUrl.searchParams.set("next", getSafeRelativePath(next));

  return callbackUrl.toString();
}

export function getPostCallbackRedirect(next?: string | null) {
  const safeNext = getSafeRelativePath(next ?? "/");

  if (AUTH_LOCAL_REDIRECT_PATHS.some((path) => safeNext.startsWith(path))) {
    return getAuthRedirect(safeNext);
  }

  return getDashboardRedirect(safeNext);
}

export function getRedirectWithMessage(
  path: string,
  params: Record<string, string | undefined>,
) {
  const url = new URL(getSafeRelativePath(path), getFeraAppUrls().authAppUrl);

  for (const [key, value] of Object.entries(params)) {
    if (value) {
      url.searchParams.set(key, value);
    }
  }

  return `${url.pathname}${url.search}`;
}
