import React from 'react';
import './LoggOut.css';
import '/src/app/globals.css';

export function LogOut() {
  return (
    <button
      type="button"
      className={['LoggOut'].join(' ')}
    >Logga ut
    </button>
  );
};