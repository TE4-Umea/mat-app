'use client';
import React from 'react';
import { MealProvider } from '../components/backendComponents/dropDown/MealContext';
import styles from './page.module.css';
import DropDown from '../components/backendComponents/dropDown/dropDown';
import { WeekPlan } from '../components/storyBookComponents/WeekPlan/WeekPlan';

export default function Planning({ params: { lng } }) {
  const date = new Date();
  const today = date.getMonth() + 1;
  const todayaswell = date.getDate();
  const currentDay = date.toLocaleString('default', { weekday: 'long' });

  return (
    <>
      <WeekPlan params={lng}></WeekPlan>
    </>
    // <MealProvider>
    //   <>
    //     <div className={styles.prison}>
    //       <h1 className={styles.title}>Veckans mat</h1>
    //       <p className={styles.undertext}>Planera eller generera veckans måltider</p>
    //     </div>
    //     <div>
    //       {currentDay}
    //     </div>
    //     <div>
    //       {todayaswell} / {today}
    //     </div>
    //     <div>
    //       <p>lunch</p>
    //       <DropDown mealType="Lunch" />
    //     </div>
    //     <div>
    //       <p>middag</p>
    //       <DropDown mealType="Dinner" />
    //     </div>
    //   </>
    // </MealProvider>
  );
}