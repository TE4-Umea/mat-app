import React from 'react';
import './greetingCard.css';
import '/src/app/globals.css';
import Time from '../../../../components/timeDepender/timeDepender'
import { getServerSession } from 'next-auth'


interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Contents
     */
    timeOfDay: string;
    name: string;
    label: string;
    dark: boolean;
}


export const Card = async ({
    backgroundColor,
    timeOfDay,
    name,
    label,
    dark = false,
    ...props
}: ButtonProps) => {
    const mode = dark ? 'dark' : 'light';
    const session = await getServerSession();
    return (
        <div className={['greetingCard', mode].join(' ')}
            {...props}>
            <h1><Time></Time><span>{session?.user?.name}</span>! Idag ska du äta</h1>
        </div>
    );
};