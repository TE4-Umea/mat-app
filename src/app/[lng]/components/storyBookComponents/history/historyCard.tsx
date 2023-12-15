'use client'
import React from 'react';
import './historyCard.css';
import '/src/app/globals.css';

export function HistoryCard(props) {
  return (
    <>
      <div className={['historyCard'].join(' ')}>
        <div className='bakk'>
          <p className='title'>{props.todayaswell} / {props.today}</p>

          {/* Display selected lunch */}
          <p className='text'>Lunch</p>
          <div className='ruta'>
            <p className='textruta'>{localStorage.getItem('Monday_Lunch') || 'Ingen lunch vald'}</p>
          </div>

          {/* Display selected dinner */}
          <p className='text'>Middag</p>
          <div className='ruta'>
            <p className='textruta'>{localStorage.getItem('Monday_Dinner') || 'Ingen middag vald'}</p>
          </div>
        </div>
      </div>
    </>
  );
}

