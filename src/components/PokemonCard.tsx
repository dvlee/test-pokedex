import { Box, Card, Chip, Skeleton, Stack, Typography, lighten } from "@mui/material";
import { FC } from "react";
import { useGetPokemonByNameQuery } from "../app/api/pokemonApi";
import { formatPokemonName, getIdFromApiUrl } from "../app/utils";
import { TYPE_COLORS } from "../constants/colors";
import { Pokemon, PokemonListItem, PokemonType } from "../types/pokemon";

interface Props {
  item: PokemonListItem;
  onClick: (data: Pokemon) => void;
}

const PokemonCard: FC<Props> = ({ item, onClick }) => {
  const id = getIdFromApiUrl(item.url);
  const { data, isFetching } = useGetPokemonByNameQuery(item.name);

  const handleClick = () => {
    onClick(data);
  };

  // if (!data) return null;
  if (isFetching) return <Skeleton variant='rectangular' width='100%' height={248} />;

  return (
    <Card
      sx={{
        // display: "flex",
        // justifyContent: "space-between",
        position: "relative",
        p: 3,
        height: 248,
        backgroundColor:
          lighten(TYPE_COLORS[data.types[0].type.name], 0.5) || "rgba(255,255,255,.4)",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={handleClick}
    >
      <Stack height={1} gap={1} position='relative' zIndex={10}>
        <Typography variant='h6' mb='auto' color='#222'>
          #{id?.padStart(5, "0")}
        </Typography>
        <Box display='flex' gap={1}>
          {data.types.map((type: { slot: number; type: PokemonType }) => (
            <Chip
              size='small'
              label={type.type.name}
              key={type.type.name}
              sx={{
                backgroundColor: TYPE_COLORS[type.type.name],
              }}
            />
          ))}
        </Box>
        <Typography
          variant='h4'
          fontWeight='bold'
          color='white'
          sx={{ fontSize: 30, textShadow: "0 0 10px rgba(0,0,0,.3)" }}
        >
          {formatPokemonName(item.name)}
        </Typography>
      </Stack>

      <Box
        component='img'
        src={
          data.sprites.other.dream_world.front_default ||
          data.sprites.other["official-artwork"].front_default ||
          data.sprites.other["official-artwork"].front_shiny ||
          "/assets/empty.png"
        }
        alt={item.name}
        // width={200}
        height={1}
        loading='lazy'
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          p: 2,
        }}
      />
    </Card>
  );
};

export default PokemonCard;
