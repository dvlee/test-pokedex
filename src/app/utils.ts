export const urlWithSearchParams = (url: string, params: Record<string, string>) => {
  const searchParams = new URLSearchParams(params);
  return `${url}?${searchParams}`;
};

export const getIdFromApiUrl = (url: string, type: string = "pokemon") => {
  const baseUrl = `https://pokeapi.co/api/v2/`;
  const urlParts = url.replace(baseUrl, "").split("/");

  if (urlParts[0] !== type) {
    return null;
  }

  return urlParts[1];
};

export const formatPokemonName = (name: string) => {
  const nameParts = name.split("-");
  return nameParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
};

// export const urlWithSearchParams = (url: string, params: Record<string, any>) => {
//   const urlParts = url.split('?');
//   const urlParams = new URLSearchParams(urlParts[1]);
//   const newUrlParams = Object.entries(params).reduce((acc, [key, value]) => {
//     if (value) {
//       acc.set(key, value);
//     }
//     return acc;
//   }, urlParams);

//   return `${urlParts[0]}?${newUrlParams.toString()}`;
// };
