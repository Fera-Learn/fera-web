export function slugToHref(slug: string[]) {
  return slug.length === 0 ? "/" : `/${slug.join("/")}`;
}

const titleOverrides = new Map<string, string>([
  ["kbd", "Kbd"],
  ["otp", "OTP"],
  ["ui", "UI"],
]);

export function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => {
      const override = titleOverrides.get(part);

      if (override) {
        return override;
      }

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

export function namespaceFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => {
      const override = titleOverrides.get(part);

      if (override) {
        return override;
      }

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
}
