import React from 'react';
import './WeekPlan.css';
import '/src/app/globals.css';

export function WeekPlan() {
    return (
        <div
            className={['WeekPlan'].join(' ')}>
            <div className='bakk'>
                <div id='flex'>
                    <p className='title'>Måndag</p>
                    <p className='date'>13/11</p>
                </div>

                <div className='prison'>
                    <div className='lunch'>
                        <p className='text'>Lunch</p>
                        <div id='flex'>
                            <div className='addRuta'><p className='textrutaa'>+ Lägg till måltid</p></div>
                            <div className='generate'><p className='textrutaa'>Generera en måltid</p></div>
                        </div>
                    </div>

                    <div className='middag'>
                        <p className='text'>Middag</p>
                        <div id='flex'>
                            <div className='ruta'><p className='textruta'>Mat i skål</p></div>
                            <div className='fave'><p className='textruta'>F</p></div>
                            <div className='delete'><p className='textruta'>D</p></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};