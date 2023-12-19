import React from 'react';
import './logOut.css';
import '/src/app/globals.css';
import { useTranslation } from '@/app/i18n'

export const LogOut = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['glossary', 'common'])
  return (
    <button
      type="button"
      className={['LoggOut'].join(' ')}
    >{t('common:logout')}
    </button>
  );
};