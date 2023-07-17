import {
  Box,
  Container,
  Dialog,
  Grid,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetPokemonListQuery,
  useGetPokemonTypesQuery,
  useGetPokemonsByTypesQuery,
} from "./app/api/pokemonApi";
import { getIdFromApiUrl } from "./app/utils";
import PokemonCard from "./components/PokemonCard";
import PokemonDetails from "./components/PokemonDetails";
import PokemonTypesSelector from "./components/PokemonTypesSelector";
import { Pokemon, PokemonListItem } from "./types/pokemon";

interface Props {}

const App: FC<Props> = () => {
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState<number>(Number(params.get("limit")) || 10);
  const [page, setPage] = useState(Number(params.get("page")) || 1);
  const [type, setType] = useState(params.get("type") || "");
  const [items, setItems] = useState<PokemonListItem[]>([]);
  const [isTypedQuery, setIsTypedQuery] = useState<boolean>(!!params.get("type"));

  // dialog
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const handleClickOpen = (data: Pokemon) => {
    setSelectedPokemon(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPokemon(null);
  };

  const { data: types } = useGetPokemonTypesQuery({});
  const { data: typedPokemonsData } = useGetPokemonsByTypesQuery(type.split(","), {
    skip: !isTypedQuery,
  });
  const { data } = useGetPokemonListQuery(
    {
      limit,
      offset: (page - 1) * limit,
    },
    { skip: isTypedQuery },
  );

  useEffect(() => {
    if (data && !isTypedQuery) {
      setTotal(data.count);
      setItems(data.results);
    }
  }, [data, isTypedQuery]);

  useEffect(() => {
    if (typedPokemonsData && isTypedQuery) {
      setTotal(typedPokemonsData.length);
      setItems(typedPokemonsData.slice((page - 1) * limit, page * limit));
    }
  }, [typedPokemonsData, isTypedQuery]);

  useEffect(() => {
    const params = new URLSearchParams();
    page > 1 && params.set("page", String(page));
    limit !== 10 && params.set("limit", String(limit));
    type && params.set("type", type);

    if (isTypedQuery && typedPokemonsData) {
      setItems(typedPokemonsData.slice((page - 1) * limit, page * limit));
    }

    navigate("/?" + params.toString());
  }, [page, limit, type]);

  useEffect(() => {
    setIsTypedQuery(!!type);
  }, [type]);

  const handleChangeType = useCallback(
    (type: string) => {
      setType(() => {
        setPage(1);
        return type;
      });
    },
    [type],
  );

  const handlePokemonClick = (data: Pokemon) => {
    handleClickOpen(data);
  };

  return (
    <Box bgcolor='background.default'>
      <Container maxWidth='lg'>
        <Stack alignItems='center' gap={5} p={5} minHeight={"100vh"}>
          <Typography variant='h1' color='text.primary' fontWeight={700}>
            Pokédex
            <Typography variant='caption' fontWeight={700} sx={{ fontSize: 20 }}>
              {" by dvlee"}
            </Typography>
          </Typography>

          {types && (
            <PokemonTypesSelector types={types?.results} value={type} onChange={handleChangeType} />
          )}

          <Grid container spacing={1}>
            {items.map((item) => (
              <Grid item xs={12} md={6} key={getIdFromApiUrl(item.url)}>
                <PokemonCard item={item} onClick={handlePokemonClick} />
              </Grid>
            ))}
          </Grid>

          <Box
            display='flex'
            flexDirection={{ xs: "column", md: "row" }}
            gap={5}
            alignItems='center'
          >
            <Box display='flex' alignItems='center' gap={1}>
              <Typography color='text.primary'>Pokemons per page:</Typography>
              <Select
                size='small'
                name='limit'
                onChange={(e: SelectChangeEvent<number>) => {
                  setLimit(Number(e.target.value));
                }}
                value={limit}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </Box>
            <Pagination
              page={page}
              count={Math.ceil(total / limit)}
              onChange={(_, value) => setPage(value)}
            />
          </Box>
        </Stack>
      </Container>

      <Dialog onClose={handleClose} open={open} maxWidth='lg'>
        {/* {JSON.stringify(selectedPokemon)} */}
        <PokemonDetails data={selectedPokemon} />
      </Dialog>
    </Box>
  );
};

export default App;
