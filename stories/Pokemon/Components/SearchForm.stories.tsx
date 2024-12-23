import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // For tracking actions in Storybook
import SearchForm from '@/components/search/SearchForm';

export default {
  title: 'Pokemon/Components/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered', // Centers the component in the Storybook UI
  },
} as Meta<typeof SearchForm>;

// Template for rendering SearchForm with optional redirect
const Template: StoryFn<typeof SearchForm> = (args) => <SearchForm {...args} />;

// Default variant of the SearchForm
export const Default = Template.bind({});
Default.args = {
  redirect: action('Redirect to Pokemon'), // Tracks redirection action in the Storybook UI
};

// Random Pokemon variant (checks the random button action)
export const RandomPokemon = Template.bind({});
RandomPokemon.args = {
  redirect: action('Redirect to random Pokemon'),
};

// Story with default form behavior (Submit with a Pokémon name)
export const WithValidSubmission = Template.bind({});
WithValidSubmission.args = {
  redirect: (url: string) => action('Form Submitted')(url), // Logs the form submission
};

// Story with the form where the submit button is disabled
export const DisabledSubmit = Template.bind({});
DisabledSubmit.args = {
  redirect: action('Form submission disabled'), // Submit is disabled when input is empty
};
