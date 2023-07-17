import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonListItem } from "../../types/pokemon";
import { getIdFromApiUrl, urlWithSearchParams } from "../utils";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: (params) => urlWithSearchParams("pokemon", params),
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonTypes: builder.query({
      query: () => "type",
    }),
    getPokemonType: builder.query({
      query: (name) => `type/${name}`,
    }),
    getPokemonsByTypes: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const data: PokemonListItem[] = [];
        const types = _arg as string[];
        const requests = types.map((type) => fetchWithBQ(`type/${type}`));
        const responses = await Promise.all(requests);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        responses.forEach((response: any) => {
          const pokemons = response.data.pokemon as { pokemon: PokemonListItem }[];
          return data.push(...pokemons.map((pokemon) => pokemon.pokemon));
        });

        const filteredSortedData = data
          .filter((item, index, array) => array.findIndex((t) => t.name === item.name) === index)
          .sort((a, b) => {
            const idA = Number(getIdFromApiUrl(a.url));
            const idB = Number(getIdFromApiUrl(b.url));
            return idA - idB;
          });

        return { data: filteredSortedData };
      },
    }),
  }),
});

export const {
  useGetPokemonListQuery,
  useGetPokemonByNameQuery,
  useGetPokemonTypesQuery,
  useGetPokemonTypeQuery,
  useGetPokemonsByTypesQuery,
} = pokemonApi;
