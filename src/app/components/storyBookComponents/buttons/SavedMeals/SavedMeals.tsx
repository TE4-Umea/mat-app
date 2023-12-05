import React from 'react';
import './SavedMeals.css';
import '/src/app/globals.css';
import Link from 'next/link';
import img from '../../../../../../public/bookmark_filled.svg'
import Image from 'next/image';

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
  onClick?: () => void;
}

export const Button = ({

  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <Link
      href="/pages/saved-meals" >
      <button
        type="button"
        className={['savedMeals'].join(' ')}
        {...props}
      >
        Sparade rätter
      </button>
    </Link>
  );
};