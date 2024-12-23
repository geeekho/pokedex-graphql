// src/stories/PokemonTypes.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Type } from '@/types/pokemon'; // Adjust import path
import PokemonTypes from '@/components/pokemon/PokemonTypes';

// Define mock types for the 'types' prop
const mockTypes: Type[] = [
  {
    type: { name: 'fire' },
    slot: 0,
  },
  {
    type: { name: 'water' },
    slot: 0,
  },
  {
    type: { name: 'grass' },
    slot: 0,
  },
  {
    type: { name: 'electric' },
    slot: 0,
  },
  {
    type: { name: 'fairy' },
    slot: 0,
  },
];

export default {
  title: 'Pokemon/Components/PokemonTypes', // Title in Storybook sidebar
  component: PokemonTypes,
} as Meta;

// Template function for Storybook
const Template: StoryFn = ({ types, ...args }) => (
  <PokemonTypes types={types} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  types: mockTypes,
};

export const SingleType = Template.bind({});
SingleType.args = {
  types: [{ type: { name: 'fire' } }],
};

export const NoTypes = Template.bind({});
NoTypes.args = {
  types: [],
};
