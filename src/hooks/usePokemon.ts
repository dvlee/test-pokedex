import { useGetPokemonListQuery } from "../app/api/pokemonApi";

type QueryParams = {
  limit?: number;
  page?: number;
};

const usePokemon = () => {
  const { data: allPokemons } = useGetPokemonListQuery({ limit: 100000 });

  const getPokemonList = (params: QueryParams) => {
    const { limit = 10, page = 1 } = params;
    const offset = (page - 1) * limit;

    const items = allPokemons?.results.slice(offset, offset + limit) || [];

    return items;
  };

  return {
    getAllPokemons: () => allPokemons?.results,
    getPokemonList,
  };
};

export default usePokemon;
