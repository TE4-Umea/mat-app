import React from 'react';
import './SavedMeals.css';
import '/src/app/globals.css';
import Link from 'next/link';

export function SavedMeals() {
  return (
    <Link
      href="/pages/saved-meals" >
      <button
        type="button"
        className={['savedMeals'].join(' ')}
      >
        Sparade rätter
      </button>
    </Link>
  );
};