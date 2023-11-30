import React, { createContext, useContext, useEffect, useState } from 'react';

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [selectedLunch, setSelectedLunch] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLunch') || null;
    }
    return null;
  });

  const [selectedDinner, setSelectedDinner] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedDinner') || null;
    }
    return null;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLunch', selectedLunch || '');
      localStorage.setItem('selectedDinner', selectedDinner || '');
    }
  }, [selectedLunch, selectedDinner]);

  return (
    <MealContext.Provider value={{ selectedLunch, setSelectedLunch, selectedDinner, setSelectedDinner }}>
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
