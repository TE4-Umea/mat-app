import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './greetingCard'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Card',
    component: Card,
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
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const greetingCardMorning: Story = {
    args: {
        timeOfDay: 'God morgon, ',
        name: 'namn',
        label: '! Idag ska du äta',
        dark: false,
    },
}

export const greetingCardEvening: Story = {
    args: {
        timeOfDay: 'God kväll, ',
        name: 'namn',
        label: '! Idag ska du äta',
        dark: true,
    },
}
