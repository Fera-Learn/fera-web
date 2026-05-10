const DEFAULT_ACADEMY_ORIGIN = "https://courses.fera.academy";

export const academyOrigin = (
  process.env.NEXT_PUBLIC_ACADEMY_ORIGIN ?? DEFAULT_ACADEMY_ORIGIN
).replace(/\/$/, "");

export function academyUrl(path = "") {
  if (!path || path === "/") {
    return academyOrigin;
  }

  return `${academyOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}
