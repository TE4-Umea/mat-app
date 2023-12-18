'use client'
import React from 'react';
import './historyCard.css';
import '/src/app/globals.css';
import { useTranslation } from '../../../../i18n'

export function HistoryCard(props) {
  return (
    <>
      <div className={['bakk'].join(' ')}>
        <p className='title'>{props.todayaswell} / {props.today}</p>

        {/* Display selected lunch */}
        <p className='text'>Lunch</p>
        <div className='ruta'>
          <p className='textruta'>{localStorage.getItem(`${props.currentDay}_Lunch`) || 'Ingen lunch vald'}</p>
        </div>

        {/* Display selected dinner */}
        <p className='text'>Middag</p>
        <div className='ruta'>
          <p className='textruta'>{localStorage.getItem(`${props.currentDay}_Dinner`) || 'Ingen middag vald'}</p>
        </div>
      </div>
    </>
  );
}

