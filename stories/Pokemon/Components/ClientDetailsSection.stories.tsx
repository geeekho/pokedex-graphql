import { Meta, StoryFn } from '@storybook/react';
import { PokemonProps } from '@/types/pokemon';
import ClientDetailsSection from '@/components/test/ClientDetailsSection';

// Mocking a basic PokemonProps object
const mockPokemon: PokemonProps = {
  id: 1,
  name: 'Bulbasaur',
  weight: 6.9,
  height: 0.7,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
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
        base_stat: 30,
        stat: {
          name: 'hp',
        },
      },
      {
        base_stat: 66,
        stat: {
          name: 'attack',
        },
      },
      {
        base_stat: 90,
        stat: {
          name: 'defense',
        },
      },
    ],
  },
  evolutionChainId: 1,
};

const meta: Meta<typeof ClientDetailsSection> = {
  title: 'Pokemon/Components/ClientDetailsSection',
  component: ClientDetailsSection,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;

// Template to create stories with different props
const Template: StoryFn = ({ color, pokemon, ...args }) => (
  <ClientDetailsSection color={color} pokemon={pokemon} {...args} />
);

// Default story
export const Default = Template.bind({});
Default.args = {
  pokemon: mockPokemon,
  color: 'green', // Color for the active tab
};

// Story with custom color
export const CustomColor = Template.bind({});
CustomColor.args = {
  pokemon: mockPokemon,
  color: 'blue', // Custom color for the active tab
};
Default.parameters = {
  jest: ['DetailsSection.test.tsx'],
};

CustomColor.parameters = {
  jest: ['DetailsSection.test.tsx'],
};
