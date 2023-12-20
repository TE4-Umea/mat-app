import './CreateMealIcons.css'
import '/src/app/globals.css'

import React from 'react'

interface ButtonProps {}

export const Button = ({ ...props }: ButtonProps) => {
    return (
        <>
            <input
                className="iconsRadio"
                type="radio"
                id="icon1"
                name="icons"
            />
            <label htmlFor="icon1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                >
                    <path d="M280-80v-366q-51-14-85.    5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" />
                </svg>
            </label>
        </>
    )
}
