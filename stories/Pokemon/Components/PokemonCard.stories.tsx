import { Meta, StoryFn } from '@storybook/react';
import PokemonCard from '@/components/test/ClientPokemonCard';
import { PokemonProps } from '@/types/pokemon';

// Mock Pokemon data
const mockPokemon: PokemonProps = {
  id: 1,
  name: 'Bulbasaur',
  weight: 6.9,
  height: 0.7,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  defaultText: 'A grass/poison type Pokémon.',
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
  details: {
    stats: [
      {
        base_stat: 49,
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
    ],
  },
  evolutionChainId: 1,
};

const meta: Meta<typeof PokemonCard> = {
  title: 'Pokemon/Components/PokemonCard',
  component: PokemonCard,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;

// Template for creating stories
const Template: StoryFn = ({ pokemon, ...args }) => (
  <PokemonCard pokemon={pokemon} {...args} />
);

// Default story
export const Default = Template.bind({});
Default.args = {
  pokemon: mockPokemon,
};

// Story with another variation of Pokemon (optional)
export const AnotherPokemon = Template.bind({});
AnotherPokemon.args = {
  pokemon: {
    ...mockPokemon,
    name: 'Charmander',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
        },
      },
    ],
  },
  isTesting: false, // Render DetailsSection for this variation
};
Default.parameters = {
  jest: ['ClientPokemonCard.test.tsx'],
};

AnotherPokemon.parameters = {
  jest: ['ClientPokemonCard.test.tsx'],
};
