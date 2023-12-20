import './deleteAcc.css'
import '/src/app/globals.css'

import React from 'react'

import { useTranslation } from '@/app/i18n'

export const Delete = async ({ lng }) => {
    const { t } = await useTranslation(lng, ['glossary', 'common'])
    return (
        <button type="button" className={['DeleteAcc'].join(' ')}>
            {t('common:delete_account')}
        </button>
    )
}
