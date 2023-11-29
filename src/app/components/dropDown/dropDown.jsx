// DropDown.jsx
import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './dropDown.module.css';
import Fetch from '../../lib/fetch';
import { useMealContext } from './MealContext';

export default function DropDown() {
  const { selectedMeal, setSelectedMeal } = useMealContext();
  const [meals, setMeals] = useState([]);
  const [localSelectedMeal, setLocalSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMealsData = async () => {
      try {
        const fetchedData = await Fetch();
        setMeals(fetchedData.meals.map(meal => meal.strMeal));
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMealsData();
  }, []);

  const handleMealSelect = (meal) => {
    setLocalSelectedMeal(meal);
  };

  const handleGenerateRandomMeal = () => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    setLocalSelectedMeal(randomMeal);
  };

  useEffect(() => {
    if (localSelectedMeal !== null) {
      setSelectedMeal(localSelectedMeal);
    }
  }, [localSelectedMeal, setSelectedMeal]);

  return (
    <div>
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

      {localSelectedMeal && (
        <div>
          <p>Vald måltid: {localSelectedMeal}</p>
          <Button variant="contained" onClick={handleGenerateRandomMeal}>
            Generera slumpad måltid
          </Button>
        </div>
      )}
    </div>
  );
}
