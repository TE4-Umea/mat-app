import './greetingCard.css'
import '/src/app/globals.css'

import React from 'react'

interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string
    /**
     * Contents
     */
    timeOfDay: string
    name: string
    label: string
    dark: boolean
}

export const Card = ({
    backgroundColor,
    timeOfDay,
    name,
    label,
    dark = false,
    ...props
}: ButtonProps) => {
    const mode = dark ? 'dark' : 'light'
    return (
        <div className={['greetingCard', mode].join(' ')} {...props}>
            <h1>
                {timeOfDay}
                <span>{name}</span>
                {label}
            </h1>
        </div>
    )
}
