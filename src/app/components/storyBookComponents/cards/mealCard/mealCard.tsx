import React from 'react';
import './mealCard.css';
import '/src/app/globals.css';
import Fetch from '../../../../lib/fetch'

interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;

    /**
     * Contents
     */
    label: string;
    tags: string[];
}

export const Card = async ({
    backgroundColor,
    label,
    tags,
    ...props
}: ButtonProps) => {
    const fetch = await Fetch();

    return (
        <div className={['mealCard'].join(' ')}
            {...props}>
            <img src={fetch.meals[7].strMealThumb}></img>
            <div>
                <p>{label}</p>
                <ul>
                    mat i skål
                </ul>
            </div>
        </div>
    );
};