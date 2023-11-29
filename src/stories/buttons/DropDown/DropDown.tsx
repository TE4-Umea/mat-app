import React from 'react';
import './DropDown.css';
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
    onClick?: () => void;
}

export const Button = ({
    backgroundColor,
    options,
    ...props
}: ButtonProps) => {
    return (
        <select className={['dropDown'].join(' ')}>
            {options.map((options) => <option key={options} value={options}>{options}</option>)}
        </select>
    );
};