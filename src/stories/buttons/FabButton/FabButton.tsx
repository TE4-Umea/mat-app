import React from 'react';
import './FabButton.css';
import '/src/app/globals.css';

interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
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