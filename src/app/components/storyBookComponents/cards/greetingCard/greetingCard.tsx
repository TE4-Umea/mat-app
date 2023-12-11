import React from 'react';
import './greetingCard.css';
import '/src/app/globals.css';
import Time from '../../../../components/backendComponents/timeDepender/timeDepender'
import { getServerSession } from 'next-auth'


interface ButtonProps {
    timeOfDay: string;
    dark: boolean;
}


export const GreetingCard = async ({
    timeOfDay,
    dark = false,
    ...props
}: ButtonProps) => {
    const mode = dark ? 'dark' : 'light';
    const session = await getServerSession();
    return (
        <div className={['greetingCard', mode].join(' ')}>
            <h1><Time></Time><span>{session?.user?.name}</span>! Idag ska du äta</h1>
        </div>
    );
};