import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './dropDown.module.css';
import Fetch from '@/app/lib/fetch';
import { useMealContext } from './MealContext';

export default function DropDown({ mealType }) {
  const { selectedLunch, selectedDinner, setSelectedLunch, setSelectedDinner } = useMealContext();
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

    // Set initial localSelectedMeal based on mealType
    if (mealType === 'Lunch') {
      setLocalSelectedMeal(selectedLunch);
    } else if (mealType === 'Dinner') {
      setLocalSelectedMeal(selectedDinner);
    }
  }, [mealType, selectedLunch, selectedDinner]);

  const handleMealSelect = (meal) => {
    setLocalSelectedMeal(meal);
  };

  const handleGenerateRandomMeal = () => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    setLocalSelectedMeal(randomMeal);
  };

  const handleRemoveMeal = () => {
    setLocalSelectedMeal(null);
    localStorage.removeItem(mealType === 'Lunch' ? 'selectedLunch' : 'selectedDinner');
  };

  useEffect(() => {
    let DeadSelect = false;

    if (localSelectedMeal !== null) {
      if (!DeadSelect) {
        if (mealType === 'Lunch') {
          setSelectedLunch(localSelectedMeal);
        } else if (mealType === 'Dinner') {
          setSelectedDinner(localSelectedMeal);
        }
      }

      return () => {
        DeadSelect = false;
      }
    }
  }, [localSelectedMeal, setSelectedLunch, setSelectedDinner, mealType]);

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" aria-label={`Add ${mealType} Meal`}>
            {localSelectedMeal ? localSelectedMeal : '+ Lägg till måltid'}
          </Button>
        </DropdownTrigger>
        <DropdownMenu className={styles.dropDownMenu} aria-label={`Add ${mealType} Meal`}>
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

      {!localSelectedMeal && (
        <Button variant="contained" onClick={handleGenerateRandomMeal} aria-label={`Add ${mealType} Meal`}>
          Generera slumpad måltid
        </Button>
      )}

      {localSelectedMeal && (
        <Button variant="contained" onClick={handleRemoveMeal} aria-label={`Add ${mealType} Meal`}>
          Remove
        </Button>
      )}
    </div>
  );
}
