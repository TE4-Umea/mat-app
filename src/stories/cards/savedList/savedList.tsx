import './savedList.css'
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
        <div className={['savedList'].join(' ')} {...props}>
            <style jsx>{`
                button {
                    background-color: ${backgroundColor};
                }
            `}</style>
            <div>
                <div className="bak2">
                    <div id="flex">
                        <div className="tex">
                            <p> Skål Skål skål</p>
                        </div>
                        <div className="del">
                            <p>D</p>
                        </div>
                    </div>
                </div>

                <div className="bak1">
                    <div id="flex">
                        <div className="tex">
                            <p>Mat i skål</p>
                        </div>
                        <div className="del">
                            <p>D</p>
                        </div>
                    </div>
                </div>

                <div className="bak2">
                    <div id="flex">
                        <div className="tex">
                            <p>Skål i mat</p>
                        </div>
                        <div className="del">
                            <p>D</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
