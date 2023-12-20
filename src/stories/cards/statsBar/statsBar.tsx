import './statsBar.css'
import '/src/app/globals.css'

import React from 'react'

interface ButtonProps {
    label: string
    times: number
    percent: number
}

export const Card = ({ label, times, percent, ...props }: ButtonProps) => {
    return (
        <div className="dflex">
            <span className="statsTitle">{label}</span>
            <div>
                <p className="statsAmount">{times} gånger</p>
                <div className={['statsBackDrop'].join(' ')}>
                    <style jsx>{`
                        .statsBar {
                            width: ${percent}%;
                        }
                    `}</style>
                    <div id="statsBar" className={['statsBar'].join(' ')} />
                </div>
            </div>
        </div>
    )
}
