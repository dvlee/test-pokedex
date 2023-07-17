import { createTheme, darken, lighten } from "@mui/material/styles";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({
    color: {
      main: mainColor,
      dark: darken(mainColor, 0.2),
      light: lighten(mainColor, 0.5),
      contrastText: "#fff",
    },
  });

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222",
    },
    pokemonType_normal: createColor("#8a98a0"),
    pokemonType_fighting: createColor("#da2621"),
    pokemonType_flying: createColor("#71abcc"),
    pokemonType_poison: createColor("#bd45d1"),
    pokemonType_ground: createColor("#c46936"),
    pokemonType_rock: createColor("#b8b388"),
    pokemonType_bug: createColor("#84b35a"),
    pokemonType_ghost: createColor("#564aaa"),
    pokemonType_steel: createColor("#4d7e7e"),
    pokemonType_fire: createColor("#fa9141"),
    pokemonType_water: createColor("#2a88d0"),
    pokemonType_grass: createColor("#5ab35c"),
    pokemonType_electric: createColor("#f9be00"),
    pokemonType_psychic: createColor("#e37a83"),
    pokemonType_ice: createColor("#3ac9c6"),
    pokemonType_dragon: createColor("#265ea6"),
    pokemonType_dark: createColor("#3f4e56"),
    pokemonType_fairy: createColor("#e285e2"),
    pokemonType_unknown: createColor("#959595"),
    pokemonType_shadow: createColor("#4B0082"),
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 8,
          borderColor: "#fff",
        },
      },
    },
  },
});

export default theme;
