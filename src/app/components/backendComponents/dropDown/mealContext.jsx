'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const MealContext = createContext()

export const MealProvider = ({ children, currentDay }) => {
    const getCurrentDayStorageKey = (mealType) => {
        return `${currentDay}_${mealType}`
    }

    const [selectedLunch, setSelectedLunch] = useState(() => {
        if (typeof window !== 'undefined') {
            const key = getCurrentDayStorageKey('Lunch')
            return localStorage.getItem(key) || null
        }
        return null
    })

    const [selectedDinner, setSelectedDinner] = useState(() => {
        if (typeof window !== 'undefined') {
            const key = getCurrentDayStorageKey('Dinner')
            return localStorage.getItem(key) || null
        }
        return null
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const lunchKey = getCurrentDayStorageKey('Lunch')
            const dinnerKey = getCurrentDayStorageKey('Dinner')
            localStorage.setItem(lunchKey, selectedLunch || '')
            localStorage.setItem(dinnerKey, selectedDinner || '')
        }
    }, [selectedLunch, selectedDinner])

    return (
        <MealContext.Provider
            value={{
                selectedLunch,
                setSelectedLunch,
                selectedDinner,
                setSelectedDinner,
            }}
        >
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    const context = useContext(MealContext)
    if (!context) {
        throw new Error('useMealContext must be used within a MealProvider')
    }
    return context
}
