import React from 'react';
import './planCarouselCard.css';
import '/src/app/globals.css';

interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Contents
     */
    label: string;
    /**
     * Which button is pressed
     */
    lunch: boolean;
    /**
     * Needs icon
     */
}

export const Card = ({
    backgroundColor,
    label,
    lunch = true,
    ...props
}: ButtonProps) => {
    const mode = lunch ? 'buttonLunch' : 'buttonDinner';
    return (
        <div className={['planCarouselCard', mode].join(' ')}
            {...props}>
            <div>
                <p>{label}</p>
                <button></button>
                <button></button>
            </div>
        </div>
    );
};