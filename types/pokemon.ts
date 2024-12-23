type Generation = {
  name: string;
};

type Habitat = {
  name: string;
};

type Ability = {
  ability: {
    name: string;
  };
};

export type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type Type = {
  slot: number;
  type: {
    name: string;
  };
};

type Move = {
  move: {
    name: string;
  };
  level: number;
};

type Item = {
  pokemon_v2_item: {
    name: string;
    cost: number;
  };
  rarity: string;
};

type FlavorText = {
  flavor_text: string;
};

export type PokemonNode = {
  height: number;
  name: string;
  id: number;
  weight: number;
  abilities: Ability[];
  stats: Stat[];
  types: Type[];
  levelUpMoves: Move[];
  foundInAsManyPlaces: {
    aggregate: {
      count: number;
    };
  };
  fireRedItems: Item[];
  sprites: { sprites: Sprites }[];
};

type Sprites = {
  front_default: string | null;
  back_default?: string | null;
  front_shiny?: string | null;
  back_shiny?: string | null;
};

type Species = {
  evolution_chain_id?: number;
  name: string;
  base_happiness: number;
  is_legendary: boolean;
  is_mythical: boolean;
  generation: Generation;
  habitat: Habitat;
  pokemon: {
    nodes: PokemonNode[];
  };
  flavorText: FlavorText[];
};

export type PokemonDetailsResponse = {
  data: {
    species: Species[];
  };
};

interface PokemonSpecies {
  name: string;
  id: number;
  order: number;
}

interface PokemonSpeciesAggregate {
  nodes: PokemonSpecies[];
}

export interface EvolutionChain {
  id: number;
  pokemon: PokemonSpeciesAggregate;
}

export interface EvolutionChainResponse {
  data: { chain: EvolutionChain[] };
}

export interface SpritesResponse {
  data: { sprites: { sprites: Sprites }[] };
}

export interface EvolutionItem {
  id: number;
  name: string;
  image: string;
}

export interface PokemonProps {
  id: number;
  name: string;
  weight: number;
  height: number;
  image: string;
  defaultText: string;
  evolutionChainId?: number;
  types: Type[];
  details: {
    stats: Stat[];
  };
}
