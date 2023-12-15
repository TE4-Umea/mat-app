import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './MealsMenu';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'page',
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;



export const MealsMenu: Story = {
  args: {
  }
};