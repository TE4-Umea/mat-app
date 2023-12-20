import './navBar.css'
import '/src/app/globals.css'

import React from 'react'

interface ButtonProps {}

/**
 * Primary UI component for user interaction
 */
export const Button = ({}: ButtonProps) => {
    return (
        <nav className="navBar">
            <span className="navButton" id="navHome">
                Hem
            </span>
            <span className="navButton" id="navPlanning">
                Planering
            </span>
            <span className="navButton" id="navHistory">
                Historik
            </span>
            <span className="navButton" id="navProfile">
                Profil
            </span>
        </nav>
    )
}
