import React from 'react';
import './historyCard.css';
import '/src/app/globals.css';

export function HistoryCard() {
  return (
    <div className={['historyCard'].join(' ')}>
      <div className='bakk'>
        <p className='title'>Igår</p>
        <p className='text'>Lunch</p>
        <div className='ruta'>
          <p className='textruta'>En Kerstkristina</p>
        </div>
        <p className='text'>Middag</p>
        <div className='ruta'>
          <p className='textruta'>En till Kerstkristina</p>
        </div>
      </div>
    </div>
  );
};