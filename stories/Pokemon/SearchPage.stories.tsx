// src/stories/SearchPage.stories.tsx
import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import SearchPage from '@/app/(search)/page';
import { expect, userEvent, within } from '@storybook/test';
import { redirect } from '@storybook/nextjs/navigation.mock';

export default {
  title: 'Pokemon/Pages/SearchPage',
  component: SearchPage,
} as Meta;

const Template: StoryFn = (args) => {
  return <SearchPage {...args} />; // Passing args to the component
};

export const Submit: StoryObj<typeof SearchPage> = {
  args: {},
  parameters: {
    moduleMock: {},
    nextjs: {
      appDirectory: true, // 👈 Set this
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const userInput = await canvas.findByPlaceholderText('Diglett');
    await userEvent.type(userInput, 'Pikachu');
    await userEvent.click(await canvas.findByText('Submit'));
    expect(redirect).toHaveBeenCalledWith('/pikachu');
  },
};
export const Disabled: StoryObj<typeof SearchPage> = {
  args: {},
  parameters: {
    moduleMock: {},
    nextjs: {
      appDirectory: true, // 👈 Set this
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const userInput = await canvas.findByPlaceholderText('Diglett');
    await userEvent.type(userInput, 'Pik');
    // await userEvent.click(await canvas.findByText('Submit'));
  },
};

export const Default = Template.bind({});
Default.args = {};
// Default.parameters = {
//   jest: ['SearchPage.test.tsx'],
// };
