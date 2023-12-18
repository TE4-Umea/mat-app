'use client';
import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './dropDown.module.css';
import Fetch from '@/app/lib/matFetch';
import { useMealContext } from './MealContext';
import '../../storyBookComponents/WeekPlan/WeekPlan.css';

export default function DropDown({ mealType }) {
  const { selectedLunch, selectedDinner, setSelectedLunch, setSelectedDinner } = useMealContext();
  const [meals, setMeals] = useState([]);
  const [localSelectedMeal, setLocalSelectedMeal] = useState(null);
  const [time, setTime] = useState(false);

  useEffect(() => {
    const fetchMealsData = async () => {
      try {
        const fetchedData = await Fetch();
        setMeals(fetchedData);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };
    fetchMealsData();
  }, []);


  useEffect(() => {
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
    setLocalSelectedMeal(meal.name);
    if (mealType === 'Lunch') {
      setSelectedLunch(meal.name);
    } else if (mealType === 'Dinner') {
      setSelectedDinner(meal.name);
    }
  };

  const handleGenerateRandomMeal = () => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    setLocalSelectedMeal(randomMeal.name);
    if (mealType === 'Lunch') {
      setSelectedLunch(randomMeal.name);
    } else if (mealType === 'Dinner') {
      setSelectedDinner(randomMeal.name);
    }
  }

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
    <>

      <Dropdown>
        <DropdownTrigger>
          <Button className={time ? 'weekPlanRuta' : 'weekPlanAddRuta'} variant="bordered" aria-label={`Add ${mealType} Meal`}>
            <p className='weekPlanTextrutaa'>{localSelectedMeal ? localSelectedMeal : '+ Lägg till måltid'}</p>
          </Button>
        </DropdownTrigger>
        <DropdownMenu className={styles.dropDownMenu} aria-label={`Add ${mealType} Meal`}>
          {meals && meals.map((meal, index) => (
            <DropdownItem key={index} onClick={() => { handleMealSelect(meal); setTime(true) }}>
              {meal.name}
            </DropdownItem>
          ))}
          <DropdownItem onClick={() => { handleGenerateRandomMeal(); setTime(true) }} >
            Generera en slumpad måltid
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {!localSelectedMeal && (
        <Button className='weekPlanGenerate' variant="contained" onClick={() => { handleGenerateRandomMeal(); setTime((prevDisplay) => !prevDisplay) }} aria-label={`Add ${mealType} Meal`}>
          <p className='weekPlanTextrutaa'>
            Generera slumpad måltid
          </p>
        </Button>
      )}

      {localSelectedMeal && (
        <Button className='weekPlanDelete' variant="contained" onClick={() => { handleRemoveMeal(); setTime((prevDisplay) => !prevDisplay) }} aria-label={`Add ${mealType} Meal`}>
          <p className='textruta'>
            Remove
          </p>
        </Button>
      )}
    </>
  );
}
