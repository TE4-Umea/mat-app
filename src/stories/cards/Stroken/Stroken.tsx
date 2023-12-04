import React from 'react';
import './Stroken.css';
import '/src/app/globals.css';

interface ButtonProps {
    label: string;
}

export const Card = ({
    label,
    ...props
}: ButtonProps) => {
    return (
        <>
            <input type="checkbox" id='tipButton' />
            <label htmlFor="tipButton" className='stroken-container'>
                <div className='tips-from-tha-stroke-container'>
                    <div className='tips-from-tha-stroke'>Tips från Stroken </div>
                </div>
                <div className='stroken'></div>

                <div className='bubble'>
                    <div className='bubble-square'>{label}</div>
                    <div className='bubble-triangle'></div>
                </div>
            </label>



        </>


    );
};