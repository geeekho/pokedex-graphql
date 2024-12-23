import { Meta, StoryObj } from '@storybook/react';
import { EvolutionItem } from '@/types/pokemon';
import Evolutions from '@/components/test/ClientEvolutions';

// Mock Evolution Item Data
const mockEvolutionData: EvolutionItem[] = [
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

// Meta configuration for the Storybook
const meta: Meta<typeof Evolutions> = {
  title: 'Pokemon/Components/Evolutions',
  component: Evolutions,
  args: {
    color: '#4CAF50', // Green color as a default active color
    evolutionData: mockEvolutionData,
  },
};

export default meta;

// Story configuration
type Story = StoryObj<typeof Evolutions>;

export const Default: Story = {
  args: {
    color: '#4CAF50', // Green color for the evolution line
    evolutionData: mockEvolutionData,
  },
};

export const AnotherPokemon: Story = {
  args: {
    color: '#FF9800', // Orange color for the loading state
    evolutionData: [
      {
        id: 4,
        name: 'Charmander',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      },
      {
        id: 5,
        name: 'Charmeleon',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      },
      {
        id: 6,
        name: 'Charizard',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      },
    ],
  },
};
Default.parameters = {
  jest: ['Evolutions.test.tsx'],
};
AnotherPokemon.parameters = {
  jest: ['Evolutions.test.tsx'],
};
