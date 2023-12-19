import React from 'react';
import './greetingCard.css';
import '/src/app/globals.css';
import { Time } from '../../backendComponents/timeDepender/timeDepender'
import { getServerSession } from 'next-auth'
import { useTranslation } from '../../../i18n'

export const GreetingCard = async ({ lng, dark }) => {
    const { t } = await useTranslation(lng, ['glossary', 'common'])
    const mode = dark ? 'dark' : 'light';
    const session = await getServerSession();
    return (
        <div className={['greetingCard', mode].join(' ')} >
            <h1><Time lng={lng}></Time><span>{session?.user?.name}</span>! {t('glossary:eat.today')}</h1>
        </div>
    )
}