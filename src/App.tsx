import { FC, useEffect, useState } from "react";
import "./App.css";
import { useGetPokemonListQuery } from "./app/api/pokemonApi";
import { getIdFromUrl } from "./app/utils";
import { PokemonListItem } from "./types/pokemon";

interface Props {}

const App: FC<Props> = () => {
  const [items, setItems] = useState<PokemonListItem[]>([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPokemonListQuery({
    limit,
    offset: (page - 1) * limit,
  });

  useEffect(() => {
    if (data) {
      setItems(data.results);
      setTotal(data.count);
    }
  }, [data]);

  const prevPage = () => {
    setPage((page) => page - 1);
  };

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  if (!data) return null;

  return (
    <div className='app'>
      <h1>Pokedex</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              {getIdFromUrl(item.url)}. {item.name}
            </li>
          ))}
        </ul>
      )}
      <button disabled={!data.previous || isLoading} onClick={prevPage}>
        Prev
      </button>
      <span>page: {page}</span>
      <button disabled={!data.next || isLoading} onClick={nextPage}>
        Next
      </button>
    </div>
  );
};

export default App;
