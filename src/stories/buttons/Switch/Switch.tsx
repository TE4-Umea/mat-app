import './Switch.css'
import '/src/app/globals.css'

import React from 'react'

interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string
    /**
     * Optional click handler
     */
    onClick?: () => void
}

export const Button = ({ backgroundColor, ...props }: ButtonProps) => {
    return (
        <>
            <input type="checkBox" id="switchButton" className="hidden" />
            <label htmlFor="switchButton" className="switch" {...props}>
                <div className="switch-front"></div>
            </label>
        </>
    )
}
