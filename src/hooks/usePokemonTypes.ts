import { useGetPokemonTypesQuery } from "../app/api/pokemonApi";
import { getIdFromApiUrl } from "../app/utils";

const usePokemonTypes = () => {
  const { data } = useGetPokemonTypesQuery({});

  const getPokemonsByTypeId = (url: string) => {
    const typeId = getIdFromApiUrl(url, "type");

    return typeId;
  };

  return {
    types: data?.results,
    getPokemonsByTypeId,
  };
};

export default usePokemonTypes;
