import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Stat } from '@/types/pokemon'; // Adjust import if needed
import Stats from '@/components/pokemon/tabs/Stats';

const mockStats: Stat[] = [
  { stat: { name: 'hp' }, base_stat: 75 },
  { stat: { name: 'attack' }, base_stat: 80 },
  { stat: { name: 'defense' }, base_stat: 70 },
  { stat: { name: 'special-attack' }, base_stat: 90 },
  { stat: { name: 'special-defense' }, base_stat: 60 },
  { stat: { name: 'speed' }, base_stat: 100 },
];

// Default export with metadata
export default {
  title: 'Pokemon/Components/Stats', // Storybook category and title
  component: Stats, // Your Stats component
} as Meta;

const Template: StoryFn = ({ stats, color, ...args }) => (
  <Stats stats={stats} color={color} {...args} />
);

// Default story using mock data
export const Default = Template.bind({});
Default.args = {
  stats: mockStats,
  color: '#F85888', // Example color for the stats (e.g., pinkish red)
};

// You can create more variations of the component by changing args

export const HighStats = Template.bind({});
HighStats.args = {
  stats: [
    { stat: { name: 'hp' }, base_stat: 100 },
    { stat: { name: 'attack' }, base_stat: 120 },
    { stat: { name: 'defense' }, base_stat: 110 },
    { stat: { name: 'special-attack' }, base_stat: 140 },
    { stat: { name: 'special-defense' }, base_stat: 100 },
    { stat: { name: 'speed' }, base_stat: 130 },
  ],
  color: '#6890F0', // Blue color for higher stats
};

export const LowStats = Template.bind({});
LowStats.args = {
  stats: [
    { stat: { name: 'hp' }, base_stat: 30 },
    { stat: { name: 'attack' }, base_stat: 40 },
    { stat: { name: 'defense' }, base_stat: 35 },
    { stat: { name: 'special-attack' }, base_stat: 50 },
    { stat: { name: 'special-defense' }, base_stat: 45 },
    { stat: { name: 'speed' }, base_stat: 60 },
  ],
  color: '#A8A878', // Beige color for lower stats
};
