import { Box, Chip } from "@mui/material";
import { FC } from "react";
import { TYPE_COLORS } from "../constants/colors";
import { PokemonType } from "../types/pokemon";

interface Props {
  types: { slot: number; type: PokemonType }[];
}

const PokemonTypes: FC<Props> = ({ types }) => {
  return (
    <Box display='flex' gap={1}>
      {types.map((type) => (
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
  );
};

export default PokemonTypes;
