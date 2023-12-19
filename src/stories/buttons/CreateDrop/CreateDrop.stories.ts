import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './CreateDrop';
import imageFile from '../../assets/github.svg'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ingredients: Story = {
    args: {
        options: ['Ingredienser', 'input text'],
    },
};

export const Instructions: Story = {
    args: {
        options: ['Instruktioner', 'input text'],
    },
};

