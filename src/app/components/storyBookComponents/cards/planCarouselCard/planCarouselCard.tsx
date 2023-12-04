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
        <div className={['planCarouselCard'].join(' ')}
            {...props}>
            <div>
                <p>Kladdig pizza med bearnaise sås</p>
                <div className={['buttonContainer', mode].join(' ')}>
                    <button>Lunch</button>
                    <button>Middag</button>
                </div>
            </div>
            {/* <img src='src/stories/assets/github.svg'></img> */}
        </div>
    );
};