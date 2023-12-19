'use client'
import React from 'react';
import './planCarouselCard.css';
import '/src/app/globals.css';
import { useState, useEffect } from "react";


export const CarouselCard = ({ lunch, currentDay }) => {
    const mode = lunch ? 'buttonLunch' : 'buttonDinner';
    const mode1 = lunch ? 'buttonDinner' : 'buttonLunch';
    const today = new Date();
    const [time, setTime] = useState(false);
    // const itemLunch = localStorage.getItem(`${currentDay}_Lunch`) || 'Ingen lunch vald'
    // const itemDinner = localStorage.getItem(`${currentDay}_Dinner`) || 'Ingen middag vald'
    const [itemLunch, setItemLunch] = useState<string>("");
    const [itemDinner, setItemDinner] = useState<string>("");

    useEffect(() => {
        setItemLunch(localStorage.getItem(`${currentDay}_Lunch`) || 'Ingen lunch vald');
        setItemDinner(localStorage.getItem(`${currentDay}_Dinner`) || 'Ingen middag vald');
    }, []);


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
                {modeTime() && (
                <>
                    <p className={time ? 'notShow' : 'show'}>
                        {itemLunch}
                    </p>
                    <p className={time ? 'show' : 'notShow'}>
                        {itemDinner}
                    </p>
                </>
                )}
                {!modeTime() && (
                <>
                    <p className={time ? 'show' : 'notShow'}>
                        {itemLunch}
                    </p>
                    <p className={time ? 'notShow' : 'show'}>
                        {itemDinner}
                    </p>
                </>
                )}


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
    
            {/* <img src='src/stories/assets/github.svg'></img> */}
        </div>
    );
};


