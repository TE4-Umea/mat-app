import React from 'react';
import './CreateMealIcons.css';
import '/src/app/globals.css';


export function CreateMealIcons(props: { iconId: string, svg: string}) {

    return (
        <>
            <input className="iconsRadio" type="radio" id={props.iconId} name='icons' />
            <label className='iconButton' htmlFor={props.iconId}><svg height="24" viewBox="0 -960 960 960" width="24"><path d={props.svg} /></svg></label>
        </>
    );
};