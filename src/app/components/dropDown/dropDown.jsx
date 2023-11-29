import React, { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './dropDown.module.css';
import Fetch from '../../lib/fetch';

export default function DropDown() {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    useEffect(() => {
        const fetchMealsData = async () => {
            const fetch = await Fetch();
            setMeals(fetch.meals.map(meal => meal.strMeal));
        };

        fetchMealsData();
    }, []);

    const handleMealSelect = (meal) => {
        setSelectedMeal(meal);
    };

    const handleGenerateRandomMeal = () => {
        const randomMeal = meals[Math.floor(Math.random() * meals.length)];
        setSelectedMeal(randomMeal);
    };

    const DropdownContent = () => (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="bordered">+ Lägg till måltid</Button>
            </DropdownTrigger>
            <DropdownMenu className={styles.dropDownMenu}>
                {meals.map((meal, index) => (
                    <DropdownItem key={index} onClick={() => handleMealSelect(meal)}>
                        {meal}
                    </DropdownItem>
                ))}
                <DropdownItem onClick={handleGenerateRandomMeal}>
                    Generera en slumpad måltid
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );

    return (
        <div>
            <DropdownContent />
            {selectedMeal && (
                <div>
                    <p>Vald måltid: {selectedMeal}</p>
                    <Button variant="contained" onClick={handleGenerateRandomMeal}>
                        Generera slumpad måltid
                    </Button>
                </div>
            )}
        </div>
    );
}
