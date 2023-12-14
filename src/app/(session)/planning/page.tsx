'use client';
import React from 'react';
import { MealProvider } from '../../components/backendComponents/dropDown/MealContext';
import styles from './page.module.css';
import DropDown from '../../components/backendComponents/dropDown/dropDown';
import { WeekPlan } from '@/app/components/storyBookComponents/cards/WeekPlan/WeekPlan';

export default function Planning() {
  const date = new Date();
  const today = date.getMonth() + 1;
  const todayaswell = date.getDate();
  const data = [1, 2, 3, 4, 5, 6, 7]

  const getDayOfWeek = (date, offset) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + offset);
    return newDate.toLocaleString('default', { weekday: 'long' });
  };

  return (
    <>
      <div className={styles.prison}>
        <h1 className={styles.title}>Veckans mat</h1>
        <p className={styles.undertext}>Planera eller generera veckans måltider</p>
      </div>
      {data.map((offset) => (
        <WeekPlan
          key={offset}
          today={today}
          todayaswell={todayaswell + offset - 1}
          currentDay={getDayOfWeek(date, offset - 1)}
        ></WeekPlan>
      ))}
    </>
  );
}