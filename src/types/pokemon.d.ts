export type PokemonListItem = {
  name: string;
  url: string;
};

export type Pokemon = {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
  }[];
  // game_indices: {
  //   game_index: number;
  //   version: {
  //     name: string;
  //     url: string;
  //   };
  // }[];
  height: number;
  held_items: Record<string, string | number | boolean>[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  // moves: {
  //   move: {
  //     name: string;
  //     url: string;
  //   };
  //   version_group_details: {
  //     level_learned_at: number;
  //     move_learn_method: {
  //       name: string;
  //       url: string;
  //     };
  //     version_group: {
  //       name: string;
  //       url: string;
  //     };
  //   }[];
  // }[];
  name: string;
  order: number;
  past_types: [];
  // species: {
  //   name: string;
  //   url: string;
  // };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string | null;
        front_shiny: string | null;
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};

export type PokemonType = {
  name: string;
  url: string;
};
