import React from 'react';
import './FabButton.css';
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
    image: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export const Button = ({

    backgroundColor,
    image,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={['fabButton'].join(' ')}
            {...props}
        >
            <img src={image}></img>
            <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
        </button>
    );
};