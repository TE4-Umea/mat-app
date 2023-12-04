'use client';
import React from 'react';
import { MealProvider } from '../../components/dropDown/MealContext';
import styles from '../planning/page.module.css';
import DropDown from '../../components/dropDown/dropDown';

export default function Planning() {
  return (
    <MealProvider>
      <main>
        <h1>Veckans mat</h1>
        <h2>Planera eller generera veckans måltider</h2>
        <div>
          <div>
            <div>
              dag
            </div>
            <div>
              datum
            </div>
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
