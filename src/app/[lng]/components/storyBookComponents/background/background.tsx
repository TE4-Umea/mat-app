import React from 'react';
import './background.css';
import '/src/app/globals.css';

interface ButtonProps {

  light?: boolean;

  size?: 'small' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Background = ({
  light = true,
  size = 'large',
  ...props
}: ButtonProps) => {
  const mode = light ? 'background--light' : 'background--dark';
  return (
    <section className={['background', `background--${size}`, mode].join(' ')}
      {...props}>
      <section className='clouds'>
        <div className='cloud--small'></div>
        <div className='cloud--large'>
          <div></div>
          <div></div>
        </div>
      </section>

    </section>
  );
};