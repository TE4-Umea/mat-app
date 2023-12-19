import React from 'react';
import './dropDown.css';
import '/src/app/globals.css';

interface ButtonProps {
    options: string[];
}

export const DropDown = ({
    options,
}: ButtonProps) => {
    return (
        <select className={['dropDown'].join(' ')}>
            {options.map((options) => <option key={options} value={options}>{options}</option>)}
        </select>
    );
};