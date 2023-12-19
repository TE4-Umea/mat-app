import React from 'react';
import './mealCard.css';
import '/src/app/globals.css';
import Fetch from '../../../lib/fetch'

interface ButtonProps {
    tags: string[];
}

export const MealCard = async ({
    tags,
}: ButtonProps) => {
    const fetch = await Fetch();
    return (
        <div className={['mealCard'].join(' ')}>
            <img src={fetch.meals[7].strMealThumb}></img>
            <div>
                <p>Mat i skål</p> {/*Hämta recept namn från databasen*/}
                <ul>
                    {tags.map((tags) => <li key={tags} value={tags}>{tags}</li>)}
                    {/*Hämta taggar som är kopplade till recept från databasen*/}
                </ul>
            </div>
        </div>
    );
};