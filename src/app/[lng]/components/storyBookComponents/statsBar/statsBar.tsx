// 'use client'
import React from 'react';
import './statsBar.css';
import '/src/app/globals.css';
import { useTranslation } from '../../../../i18n'

// interface ButtonProps {
//     label: string,
//     times: number,
//     percent: number
// }

export const StatsBar = async ({ lng, label, times, percent }) => {
    const { t } = await useTranslation(lng, ['glossary', 'common'])
    return (
        <div className='dflex'>
            <span>{label}</span>
            <div>
                <p>{times} {t('glossary:times')}</p>
                <div className='grid'>
                    <div className={['statsBackDrop'].join(' ')} />
                    <div id='statsBar' className={['statsBar'].join(' ')} style={{ width: `${percent}%` }} />
                </div>
            </div>
        </div>
    );
};