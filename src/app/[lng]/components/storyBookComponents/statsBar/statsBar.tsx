import React from 'react';
import './statsBar.css';
import '/src/app/globals.css';

interface ButtonProps {
    label: string,
    times: number,
    percent: number
}

export const Card = ({
    label,
    times,
    percent,
    ...props
}: ButtonProps) => {
    return (
        <div className='dflex'>
            <span>{label}</span>
            <div>
                <p>{times} gånger</p>
                <div className='grid'>
                    <div className={['statsBackDrop'].join(' ')} />
                    <style jsx>{`
                        .statsBar {
                            width: ${percent}vw;
                        }
                    `}</style>
                    <div id='statsBar' className={['statsBar'].join(' ')} />
                </div>
            </div>
        </div>
    );
};