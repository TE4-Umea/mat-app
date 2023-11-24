import React from 'react';
import './historyCard.css';
import '/src/app/globals.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
}

export const Card = ({

  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <div
      className={['historyCard'].join(' ')}
      {...props}
    >
      
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
          <div className='bakk'>
            <p className='title'>Igår</p>
            <p className='text'>Lunch</p>
            <div className='ruta'><p className='textruta'>En Kerstkristina</p></div>
            <p className='text'>Middag</p>
            <div className='ruta'><p className='textruta'>En till Kerstkristina</p></div>
          </div>
    </div>

  
  );
};