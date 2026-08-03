export type AuthSearchParams = Promise<
  Record<string, string | string[] | undefined>
>;

export async function getAuthSearchParams(searchParams?: AuthSearchParams) {
  return searchParams ? await searchParams : {};
}

export function getSearchParam(
  params: Record<string, string | string[] | undefined>,
  key: string,
) {
  const value = params[key];

  return Array.isArray(value) ? value[0] : value;
}
