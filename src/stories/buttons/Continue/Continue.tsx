import './Continue.css'
import '/src/app/globals.css'

import React from 'react'

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */

    /**
     * What background color to use
     */
    backgroundColor?: string
    /**
     * How large should the button be?
     */

    /**
     * Button contents
     */
    label: string
    /**
     * Optional click handler
     */
    onClick?: () => void
}

export const Button = ({ backgroundColor, label, ...props }: ButtonProps) => {
    return (
        <button type="button" className={['Continue'].join(' ')} {...props}>
            {label}
            <style jsx>{`
                button {
                    background-color: ${backgroundColor};
                }
            `}</style>
        </button>
    )
}
