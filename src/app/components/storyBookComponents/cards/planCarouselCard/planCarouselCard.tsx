'use client'
import React from 'react';
import './planCarouselCard.css';
import '/src/app/globals.css';
import { useState } from "react";

interface ButtonProps {
    lunch: boolean;
}

export const CarouselCard = ({
    lunch = true
}: ButtonProps) => {
    const mode = lunch ? 'buttonLunch' : 'buttonDinner';
    const mode1 = lunch ? 'buttonDinner' : 'buttonLunch';
    var today = new Date();
    const [time, setTime] = useState(false);

    function modeTime() {
        if (today.getHours() <= 15) {
            lunch = true;
        };

        if (today.getHours() >= 16) {
            lunch = false;
        };
        return lunch;
    }
    return (
        <div className={['planCarouselCard'].join(' ')}>
            <div>
                <p>Kladdig pizza med bearnaise sås</p> {/*Hämta planeringen från databasen*/}

                {modeTime() && (<div className={time ? ['buttonContainer', mode1].join(' ') : ['buttonContainer', mode].join(' ')}>
                    <button onClick={() => setTime((prevDisplay) => !prevDisplay)}>Lunch</button>
                    <button onClick={() => setTime((prevDisplay) => !prevDisplay)}>Middag</button>
                </div>
                )}
                {!modeTime() && (<div className={time ? ['buttonContainer', mode].join(' ') : ['buttonContainer', mode1].join(' ')}>
                    <button onClick={() => setTime((prevDisplay) => !prevDisplay)}>Lunch</button>
                    <button onClick={() => setTime((prevDisplay) => !prevDisplay)}>Middag</button>
                </div>
                )}
            </div>
            {/* <img src='src/stories/assets/github.svg'></img> */}
        </div>
    );
};


