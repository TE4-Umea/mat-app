'use client';
import React from 'react';
import { MealProvider } from '../../components/dropDown/MealContext';
import styles from '../planning/page.module.css';
import DropDown from '../../components/dropDown/dropDown';

export default function Planning() {
  return (
    <MealProvider>
      <main>

        <div className={styles.prison}>

          <h1 className={styles.title}>Veckans mat</h1>

          <p className={styles.undertext}>Planera eller generera veckans måltider</p>



          <div>
            dag
          </div>
          <div>
            datum
          </div>

          <div>
            <p>lunch</p>
            <DropDown mealType="Lunch" />
          </div>
          <div>
            <p>middag</p>
            <DropDown mealType="Dinner" />
          </div>

        </div>
      </main>
    </MealProvider>
  );
}
