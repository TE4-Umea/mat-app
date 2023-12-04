import React from 'react';
import './AddToSaved.css';
import '/src/app/globals.css';

interface ButtonProps {
  saved?: boolean; 

  onClick?: () => void;
}

export const Button = ({
  saved = false,
  ...props
}: ButtonProps) => {
  const mode = saved? 'addToSaved' : 'removeFromSaved';
  return ( 
    <button
      type="button"
      className={['saveButton', mode].join(' ')}
      {...props}
    >
       {saved ? (
          <p className='margin0'>Lägg till i sparade</p>
       ) : (
          <p className='margin0'>Ta bort från sparade</p>
       )}
    </button>
  );
};