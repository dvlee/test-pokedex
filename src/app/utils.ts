export const urlWithSearchParams = (url: string, params: Record<string, string>) => {
  const searchParams = new URLSearchParams(params);
  return `${url}?${searchParams}`;
};

export const getIdFromUrl = (url: string) => {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 2];
}