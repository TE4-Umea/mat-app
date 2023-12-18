import React from 'react';
import './Switch.css';
import '/src/app/globals.css';

export function Switch() {
  return (
    <>
      <input type="checkBox" id='switchButton' className='hidden' />
      <label
        htmlFor="switchButton"
        className='switch'
      >
        <div className='switch-front'></div>
      </label>
    </>
  );
};