import React from 'react';
import './mealCard.css';
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
            className={['mealCard'].join(' ')}
            {...props}
        >
            {label}
            <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
        </div>
    );
};