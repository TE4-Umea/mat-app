import React from 'react';
import './profile.css';
import '/src/app/globals.css';
import { getServerSession } from 'next-auth'

export async function Profile() {
  const session = await getServerSession();

  return (
    <div className={['Profile'].join(' ')}>
      <div className='bak' id='flex'>
        <div className='circle'>
          <img src={session?.user?.image} alt="Profile Picture" className='img' />
        </div>
        <div className='textt'>
          <p className='name'>{session?.user?.name}
            <br />
            <span className='mail'>{session?.user?.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};