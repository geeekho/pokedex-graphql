// src/components/SearchCard.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchCard from '@/components/search/SearchCard';

// Default export to set metadata for Storybook
const meta: Meta = {
  title: 'Pokemon/Components/SearchCard',
  component: SearchCard,
  argTypes: {
    // Define any props you may want to control in the Storybook UI (e.g., card colors, etc.)
  },
};

export default meta;

// Template for rendering the component with different props
const Template: StoryFn = (args) => <SearchCard {...args} />;

// Default Story that uses the Template
export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  jest: ['SearchCard.test.tsx'],
};
