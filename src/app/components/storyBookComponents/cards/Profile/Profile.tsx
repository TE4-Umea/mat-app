import React from 'react';
import './Profile.css';
import '/src/app/globals.css';
import { getServerSession } from 'next-auth'


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


export const Card = async ({
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const session = await getServerSession();

  return (
    <div
      className={['Profile'].join(' ')}
      {...props}
    >

      {/* <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style> */}
      <div className='bak' id='flex'>
        <div className='circle'><img src={session?.user?.image} alt="" /></div>
        <div className='textt'><p className='name'>{session?.user?.name}<br /><span className='mail'>{session?.user?.email}</span></p></div>

      </div>
    </div>


  );
};