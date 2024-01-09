import './greetingCard.css'

import { getServerSession } from 'next-auth'
import React from 'react'

import { useTranslation } from '../../../i18n'

export const GreetingCard = async ({ lng, dark }) => {
    const { t } = await useTranslation(lng, ['glossary', 'common'])
    const mode = dark ? 'dark' : 'light'
    const session = await getServerSession()
    const today = new Date()
    const currentHour = today.getHours()
    let greeting

    if (currentHour >= 6 && currentHour < 12) {
        greeting = t('glossary:greeting.morning')
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = t('glossary:greeting.afternoon')
    } else {
        greeting = t('glossary:greeting.evening')
    }

    return (
        <div className={['greetingCard', mode].join(' ')}>
            <h1>
                {greeting}
                <span>{session?.user?.name}</span>! {t('glossary:eat.today')}
            </h1>
        </div>
    )
}
