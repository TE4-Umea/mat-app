import React from 'react';
import './mealCard.css';
import '/src/app/globals.css';
import Fetch from '../../../../lib/fetch'

interface ButtonProps {
    tags: string[];
}

export const MealCard = async ({
    tags,
}: ButtonProps) => {
    const fetch = await Fetch();
    return (
        <div className={['mealCard'].join(' ')}>
            <img className='imgMIS' src={fetch.meals[7].strMealThumb}></img>
            <div>
                <p>Mat i skål</p>
                <ul>
                    {tags.map((tags) => <li key={tags} value={tags}>{tags}</li>)}
                </ul>
            </div>
        </div>
    );
};