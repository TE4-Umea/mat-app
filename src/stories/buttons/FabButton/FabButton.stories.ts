import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './FabButton';
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

const image = {
    src: imageFile,
    alt: 'my image',
};

export const FabSave: Story = {
    args: {
        image: '/public/storkiconwhite.svg',
    },
};

export const FabFavorite: Story = {
    args: {
        image: '/public/storkiconblack.svg',
    },
};
