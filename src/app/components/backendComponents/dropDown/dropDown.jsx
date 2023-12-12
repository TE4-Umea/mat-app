import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './dropDown.module.css';
import Fetch from '@/app/lib/fetch';
import { useMealContext } from './MealContext';
import '../../storyBookComponents/cards/WeekPlan/WeekPlan.css';

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
    }
  }, [localSelectedMeal, mealType, setSelectedLunch, setSelectedDinner]);

  const handleMealSelect = (meal) => {
    setLocalSelectedMeal(meal);
    if (mealType === 'Lunch') {
      setSelectedLunch(meal);
    } else if (mealType === 'Dinner') {
      setSelectedDinner(meal);
    }
  };

  const handleGenerateRandomMeal = () => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    setLocalSelectedMeal(randomMeal);
    if (mealType === 'Lunch') {
      setSelectedLunch(randomMeal);
    } else if (mealType === 'Dinner') {
      setSelectedDinner(randomMeal);
    }
  };

  const handleRemoveMeal = () => {
    setLocalSelectedMeal(null);
    if (mealType === 'Lunch') {
      setSelectedLunch(null);
    } else if (mealType === 'Dinner') {
      setSelectedDinner(null);
    }
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
          <Button className='addRuta' variant="bordered" aria-label={`Add ${mealType} Meal`}>
            <p className='textrutaa'>{localSelectedMeal ? localSelectedMeal : '+ Lägg till måltid'}</p>
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
        <Button className='generate' variant="contained" onClick={handleGenerateRandomMeal} aria-label={`Add ${mealType} Meal`}>
          <p className='textrutaa'>
            Generera slumpad måltid
          </p>
        </Button>
      )}

      {localSelectedMeal && (
        <Button className='delete' variant="contained" onClick={handleRemoveMeal} aria-label={`Add ${mealType} Meal`}>
          <p className='textruta'>
            Remove
          </p>
        </Button>
      )}
    </div>
  );
}
