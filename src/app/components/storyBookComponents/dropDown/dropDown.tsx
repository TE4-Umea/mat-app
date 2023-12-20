import './dropDown.css'
import '/src/app/globals.css'

import React from 'react'

interface ButtonProps {
    options: string[]
}

export const DropDown = ({ options }: ButtonProps) => {
    return (
        <select className={['dropDown'].join(' ')}>
            {options.map((options) => (
                <option key={options} value={options}>
                    {options}
                </option>
            ))}
        </select>
    )
}
