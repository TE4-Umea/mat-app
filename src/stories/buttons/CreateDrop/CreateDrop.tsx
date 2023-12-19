import React from 'react';
import './CreateDrop.css';
import '/src/app/globals.css';



interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Button contents
     */
    options: string[];
    /**
     * Optional click handler
     */
    droppingDown: () => void;
}

export const Button = ({
    backgroundColor,
    options,
    droppingDown,
    ...props
}: ButtonProps) => {
    return (
        <select className={['CreateDrop'].join(' ')}>
            {options.map((options) => <option key={options} value={options}>{options}</option>)}
        </select>

    );
};