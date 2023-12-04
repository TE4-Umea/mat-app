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
    var today = new Date();

    function getMealLunch() {
        if (today.getHours() <= 15) {
            return (
                <button>Lunch</button>
            );
        };

        if (today.getHours() >= 16) {
            return (
                <button>Middag</button>
            );
        };
    }
    function getMealMiddag() {
        if (today.getHours() <= 15) {
            return (
                <button>Middag</button>
            );
        };

        if (today.getHours() >= 16) {
            return (
                <button>Lunch</button>
            );
        };
    }
    return (
        <div className={['planCarouselCard'].join(' ')}
            {...props}>
            <div>
                <p>Kladdig pizza med bearnaise sås</p>
                <div className={['buttonContainer', mode].join(' ')}>
                    {getMealLunch()}
                    {getMealMiddag()}
                </div>
            </div>
            {/* <img src='src/stories/assets/github.svg'></img> */}
        </div>
    );
};


