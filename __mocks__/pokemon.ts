// src/__mocks__/pokemon.ts

import { EvolutionItem, PokemonDetailsResponse } from '@/types/pokemon';

export const mockPokemonSprites = {
  data: {
    sprites: [
      {
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
      },
      {
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        },
      },
      {
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        },
      },
    ],
  },
};

export const mockEvolutionData = {
  data: {
    chain: [
      {
        id: 1,
        pokemon: {
          nodes: [
            {
              id: 1,
              name: 'Bulbasaur',
              order: 1,
              sprite:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            },
            {
              id: 2,
              name: 'Ivysaur',
              order: 2,
              sprite:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            },
            {
              id: 3,
              name: 'Venusaur',
              order: 3,
              sprite:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
            },
          ],
        },
      },
    ],
  },
};

export const mockEvolutionItems: EvolutionItem[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 2,
    name: 'Ivysaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    id: 3,
    name: 'Venusaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
];

export const pokemonDetailsResponse: PokemonDetailsResponse = {
  data: {
    species: [
      {
        name: 'Bulbasaur',
        base_happiness: 70,
        is_legendary: false,
        is_mythical: false,
        generation: {
          name: 'Generation I',
        },
        habitat: {
          name: 'grassland',
        },
        pokemon: {
          nodes: [
            {
              height: 7,
              name: 'Bulbasaur',
              id: 1,
              weight: 69,
              abilities: [
                {
                  ability: {
                    name: 'overgrow',
                  },
                },
                {
                  ability: {
                    name: 'chlorophyll',
                  },
                },
              ],
              stats: [
                {
                  base_stat: 45,
                  stat: {
                    name: 'hp',
                  },
                },
                {
                  base_stat: 49,
                  stat: {
                    name: 'attack',
                  },
                },
                {
                  base_stat: 49,
                  stat: {
                    name: 'defense',
                  },
                },
                {
                  base_stat: 65,
                  stat: {
                    name: 'special-attack',
                  },
                },
                {
                  base_stat: 65,
                  stat: {
                    name: 'special-defense',
                  },
                },
                {
                  base_stat: 45,
                  stat: {
                    name: 'speed',
                  },
                },
              ],
              types: [
                {
                  slot: 1,
                  type: {
                    name: 'grass',
                  },
                },
                {
                  slot: 2,
                  type: {
                    name: 'poison',
                  },
                },
              ],
              levelUpMoves: [
                {
                  move: {
                    name: 'tackle',
                  },
                  level: 1,
                },
                {
                  move: {
                    name: 'growl',
                  },
                  level: 1,
                },
                {
                  move: {
                    name: 'leech-seed',
                  },
                  level: 7,
                },
                {
                  move: {
                    name: 'vine-whip',
                  },
                  level: 13,
                },
              ],
              foundInAsManyPlaces: {
                aggregate: {
                  count: 15,
                },
              },
              fireRedItems: [
                {
                  pokemon_v2_item: {
                    name: 'berry',
                    cost: 10,
                  },
                  rarity: 'common',
                },
                {
                  pokemon_v2_item: {
                    name: 'potion',
                    cost: 300,
                  },
                  rarity: 'uncommon',
                },
              ],
              sprites: [
                {
                  sprites: {
                    front_default:
                      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    back_default:
                      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                  },
                },
              ],
            },
          ],
        },
        flavorText: [
          {
            flavor_text:
              'Bulbasaur can be found in the wild in various types of grasslands.',
          },
        ],
      },
    ],
  },
};
