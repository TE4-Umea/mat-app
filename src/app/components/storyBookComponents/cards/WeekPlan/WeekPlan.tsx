// WeekPlan.js
import React from 'react';
import './WeekPlan.css';
import '/src/app/globals.css';
import DropDown from '../../../backendComponents/dropDown/dropDown';
import { MealProvider } from '../../../backendComponents/dropDown/MealContext';

export function WeekPlan(props) {
  return (
    <MealProvider currentDay={props.currentDay}>
      <>
        <div className='weekPlanBakk'>
          <div id='weekPlanFlex'>
            <p className='weekPlanTitle'>{props.currentDay}</p>
            <p className='weekPlanDate'> {props.todayaswell} / {props.today}</p>
          </div>

          <div className='prison'>
            <div className='weekPlanLunch'>
              <p className='weekPlanText'>Lunch</p>
              <div id='weekPlanFlex'>
                <DropDown mealType="Lunch" />
              </div>
            </div>

            <div className='weekPlanMiddag'>
              <p className='weekPlanText'>Middag</p>
              <div id='weekPlanFlex'>
                <DropDown mealType="Dinner" />
              </div>
            </div>
          </div>
        </div>
      </>
    </MealProvider>
  );
};
