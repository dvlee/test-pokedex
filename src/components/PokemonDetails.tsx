import {
  Box,
  Stack,
  Table,
  TableCell,
  TableRow,
  Typography,
  capitalize,
  lighten,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { TYPE_COLORS } from "../constants/colors";
import { Pokemon } from "../types/pokemon";
import PokemonTypes from "./PokemonTypes";

interface Props {
  data: Pokemon | null;
}

interface DataSection {
  title: string;
  data: {
    label: string;
    value: ReactNode;
  }[];
}

const PokemonDetails: FC<Props> = ({ data }) => {
  if (!data) return null;

  const dataSections: DataSection[] = [
    {
      title: "General Info",
      data: [
        {
          label: "ID",
          value: "#" + String(data.id).padStart(5, "0"),
        },
        {
          label: "Types",
          value: <PokemonTypes types={data.types} />,
        },
        {
          label: "Height",
          value: data.height,
        },
        {
          label: "Weight",
          value: data.weight,
        },
        {
          label: "Base Experience",
          value: data.base_experience,
        },
        {
          label: "Abilities",
          value: data.abilities.map((ability) => (
            <Typography key={ability.slot}>
              &mdash; {ability.ability.name} {ability.is_hidden ? " (hidden)" : ""}
            </Typography>
          )),
        },
      ],
    },
    {
      title: "Stats",
      data: data.stats.map((stat) => ({
        label: stat.stat.name,
        value: stat.base_stat,
      })),
    },
  ];

  return (
    <Stack
      flexDirection={{ xs: "column", md: "row" }}
      flexWrap='wrap'
      width={1}
      maxWidth={1000}
      gap={3}
      p={3}
      bgcolor={lighten(TYPE_COLORS[data.types[0].type.name], 0.5) || "rgba(255,255,255,.4)"}
    >
      <Stack maxWidth={400} alignItems='center'>
        <Box width={1} maxWidth={400}>
          <Box
            component='img'
            src={
              data.sprites.other["official-artwork"].front_default ||
              data.sprites.other["official-artwork"].front_shiny ||
              "/assets/empty.png"
            }
            alt={data.name}
            width={1}
            height={1}
            loading='lazy'
          />
        </Box>

        <Typography variant='h2'>{capitalize(data.name)}</Typography>
      </Stack>
      <Stack flexGrow={1} gap={3}>
        {dataSections.map((section, index: number) => (
          <Stack gap={1} key={index}>
            <Typography variant='h5' fontWeight={700}>
              {section.title}
            </Typography>
            <Table>
              {section.data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography>{row.label}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.value}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default PokemonDetails;
