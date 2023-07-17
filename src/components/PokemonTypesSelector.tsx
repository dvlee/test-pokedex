import { Box, Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { PokemonType } from "../types/pokemon";

interface Props {
  types: PokemonType[];
  value: string;
  onChange: (type: string) => void;
}

const PokemonTypesSelector: FC<Props> = ({ types, value, onChange }) => {
  const [selected, setSelected] = useState<string[]>(value.length ? value.split(",") : []);

  useEffect(() => {
    onChange(selected.join(","));
  }, [selected]);

  return (
    <Box maxWidth={1000} display='flex' flexWrap='wrap' justifyContent='center' gap={1}>
      {types.map((type: PokemonType) => {
        const { name } = type;
        return (
          <Button
            size='small'
            variant={!selected.includes(name) ? "contained" : "outlined"}
            color={`pokemonType_${name}` as "inherit"}
            key={name}
            onClick={() =>
              setSelected((prev) =>
                prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
              )
            }
          >
            {name}
          </Button>
        );
      })}
    </Box>
  );
};

export default PokemonTypesSelector;
