import './mealCard.css'
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
    label: string
    tags: string[]
}

export const Card = ({
    backgroundColor,
    label,
    tags,
    ...props
}: ButtonProps) => {
    return (
        <div className={['mealCard'].join(' ')} {...props}>
            <img src="src/stories/assets/assets.png"></img>
            <div>
                <p>{label}</p>
                <ul>
                    {tags.map((tags) => (
                        <li key={tags}>{tags}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
