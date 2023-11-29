// MealContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [selectedMeal, setSelectedMeal] = useState(() => {
    // Check if localStorage is available (not in SSR)
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedMeal') || null;
    }
    return null;
  });

  useEffect(() => {
    // Check if localStorage is available (not in SSR)
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedMeal', selectedMeal || '');
    }
  }, [selectedMeal]);

  return (
    <MealContext.Provider value={{ selectedMeal, setSelectedMeal }}>
      {children}
    </MealContext.Provider>
  );
};

export const useMealContext = () => {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error('useMealContext must be used within a MealProvider');
  }
  return context;
};
