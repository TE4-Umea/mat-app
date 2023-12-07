import React from 'react';
import './FabButton.css';
import '/src/app/globals.css';

interface ButtonProps {
    image: string;
}

export const Button = ({
    image
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={['fabButton'].join(' ')}
        >
            <img src={image}></img>
        </button>
    );
};