import "@mui/material/styles/createPalette";

// declare module "@mui/material/styles/createPalette" {
//   export interface PaletteOptions {
//     pokemonType: {
//       normal: string;
//       fighting: string;
//       flying: string;
//       poison: string;
//       ground: string;
//       rock: string;
//       bug: string;
//       ghost: string;
//       steel: string;
//       fire: string;
//       water: string;
//       grass: string;
//       electric: string;
//       psychic: string;
//       ice: string;
//       dragon: string;
//       dark: string;
//       fairy: string;
//       unknown: string;
//       shadow: string;
//     };
//   }
// }

declare module "@mui/material/styles" {
  interface CustomPalette {
    // electric: PaletteColorOptions;
    pokemonType_normal: PaletteColorOptions;
    pokemonType_fighting: PaletteColorOptions;
    pokemonType_flying: PaletteColorOptions;
    pokemonType_poison: PaletteColorOptions;
    pokemonType_ground: PaletteColorOptions;
    pokemonType_rock: PaletteColorOptions;
    pokemonType_bug: PaletteColorOptions;
    pokemonType_ghost: PaletteColorOptions;
    pokemonType_steel: PaletteColorOptions;
    pokemonType_fire: PaletteColorOptions;
    pokemonType_water: PaletteColorOptions;
    pokemonType_grass: PaletteColorOptions;
    pokemonType_electric: PaletteColorOptions;
    pokemonType_psychic: PaletteColorOptions;
    pokemonType_ice: PaletteColorOptions;
    pokemonType_dragon: PaletteColorOptions;
    pokemonType_dark: PaletteColorOptions;
    pokemonType_fairy: PaletteColorOptions;
    pokemonType_unknown: PaletteColorOptions;
    pokemonType_shadow: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    pokemonType_normal: true;
    pokemonType_fighting: true;
    pokemonType_flying: true;
    pokemonType_poison: true;
    pokemonType_ground: true;
    pokemonType_rock: true;
    pokemonType_bug: true;
    pokemonType_ghost: true;
    pokemonType_steel: true;
    pokemonType_fire: true;
    pokemonType_water: true;
    pokemonType_grass: true;
    pokemonType_electric: true;
    pokemonType_psychic: true;
    pokemonType_ice: true;
    pokemonType_dragon: true;
    pokemonType_dark: true;
    pokemonType_fairy: true;
    pokemonType_unknown: true;
    pokemonType_shadow: true;
  }
}
declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    pokemonType_normal: true;
    pokemonType_fighting: true;
    pokemonType_flying: true;
    pokemonType_poison: true;
    pokemonType_ground: true;
    pokemonType_rock: true;
    pokemonType_bug: true;
    pokemonType_ghost: true;
    pokemonType_steel: true;
    pokemonType_fire: true;
    pokemonType_water: true;
    pokemonType_grass: true;
    pokemonType_electric: true;
    pokemonType_psychic: true;
    pokemonType_ice: true;
    pokemonType_dragon: true;
    pokemonType_dark: true;
    pokemonType_fairy: true;
    pokemonType_unknown: true;
    pokemonType_shadow: true;
  }
}

// declare module "@mui/material/styles" {
//   interface CustomPalette {
//     anger: PaletteColorOptions;
//     apple: PaletteColorOptions;
//     steelBlue: PaletteColorOptions;
//     violet: PaletteColorOptions;
//   }
//   interface Palette extends CustomPalette {}
//   interface PaletteOptions extends CustomPalette {}
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     pokemonType: true;
//       normal: true;
//       fighting: true;
//       flying: true;
//       poison: true;
//       ground: true;
//       rock: true;
//       bug: true;
//       ghost: true;
//       steel: true;
//       fire: true;
//       water: true;
//       grass: true;
//       electric: true;
//       psychic: true;
//       ice: true;
//       dragon: true;
//       dark: true;
//       fairy: true;
//       unknown: true;
//       shadow: true;
//     };
//   }
// }
