import './WeekPlan.css'
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
        <div className={['WeekPlan'].join(' ')} {...props}>
            <div className="weekPlanBakk">
                <div id="weekPlanFlex">
                    <p className="weekPlanTitle">Måndag</p>
                    <p className="weekPlanDate">13/11</p>
                </div>

                <div className="prison">
                    <div className="weekPlanLunch">
                        <p className="weekPlanText">Lunch</p>
                        <div id="weekPlanFlex">
                            <div className="weekPlanAddRuta">
                                <p className="weekPlanTextrutaa">
                                    + Lägg till måltid
                                </p>
                            </div>
                            <div className="weekPlanGenerate">
                                <p className="weekPlanTextrutaa">
                                    Generera en måltid
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="weekPlanMiddag">
                        <p className="weekPlanText">Middag</p>
                        <div id="weekPlanFlex">
                            <div className="weekPlanRuta">
                                <p className="weekPlanTextruta">Mat i skål</p>
                            </div>
                            <div className="weekPlanDelete"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
