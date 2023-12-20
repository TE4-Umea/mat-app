import './switch.css'
import '/src/app/globals.css'

import React from 'react'

export function Switch() {
    return (
        <>
            <input type="checkBox" id="switchButton" className="hidden" />
            <label htmlFor="switchButton" className="switch">
                <div className="switch-front"></div>
            </label>
        </>
    )
}
