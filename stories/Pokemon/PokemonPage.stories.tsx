import PokemonPage from '@/components/test/PokemonPage';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof PokemonPage> = {
  title: 'Pokemon/Pages/PokemonPage',
  component: PokemonPage,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;

// Template for creating stories
const Template: StoryFn = () => <PokemonPage />;

// Default story for PokemonPage
export const Default = Template.bind({});
Default.args = {};
