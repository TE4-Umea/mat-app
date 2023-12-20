import './DropDownWeekplan.css'
import '/src/app/globals.css'

import React from 'react'

interface ButtonProps {}

export const Button = ({ ...props }: ButtonProps) => {
    return (
        <>
            <input type="checkbox" id="WeekplanActivate" className="hidden" />
            <div className="WeekplanDropdown">
                <div className="WeekplanLabel">
                    <label htmlFor="WeekplanActivate" className="WeekplanTitle">
                        <h2>Kebabpizza</h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            height="24"
                            width="24"
                        >
                            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                    </label>
                    <div>
                        <button>japp</button>
                        <button>nuh uh</button>
                    </div>
                </div>
                <label htmlFor="WeekplanActivate" className="WeekplanContent">
                    <div className="WeekplanText">
                        <div>
                            <h3>Lunch</h3>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                        </div>
                        <div>
                            <h3>Middag</h3>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                            <p>Kebabpizza</p>
                        </div>
                    </div>
                    <div className="WeekplanButtons">
                        <div></div>
                        <div></div>
                    </div>
                </label>
            </div>
        </>
    )
}
