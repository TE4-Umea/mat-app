import './Profile.css'
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
}

export const Card = ({ backgroundColor, label, ...props }: ButtonProps) => {
    return (
        <div className={['Profile'].join(' ')} {...props}>
            <style jsx>{`
                button {
                    background-color: ${backgroundColor};
                }
            `}</style>
            <div className="bak" id="flex">
                <div className="circle">
                    <p>bild</p>
                </div>
                <div className="textt">
                    <p className="name">
                        Kerstkristina <br />
                        <span className="mail">Kerstkristina@hotdawg.com</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
