import React from 'react';
import './navBar.css';
import '/src/app/globals.css';
import Link from 'next/link';

interface ButtonProps {
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
}: ButtonProps) => {
  return (
    <nav className='navBar'>

        <Link href="/">
            <span className='navButton' id='navHome'>
                Hem
            </span>
        </Link>

        <Link href="/pages/planning">
            <span className='navButton' id='navPlanning'>
                Planering
            </span>
        </Link>

        <Link href="/pages/history">
            <span className='navButton' id='navHistory'>
                Historik
            </span>
        </Link>

        <Link href="/pages/profile">
            <span className='navButton' id='navProfile'>
                Profil
            </span>
        </Link>
        
    </nav>
  );
};
