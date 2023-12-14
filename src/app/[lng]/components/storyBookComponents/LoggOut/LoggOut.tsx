import React from 'react';
import './LoggOut.css';
import '/src/app/globals.css';
import { useTranslation } from '@/app/i18n'

export async function LogOut() {
  //const { t } = await useTranslation(lng, ['glossary', 'common'])
  return (
    <button
      type="button"
      className={['LoggOut'].join(' ')}
    >Logga ut
    </button>
  );
};