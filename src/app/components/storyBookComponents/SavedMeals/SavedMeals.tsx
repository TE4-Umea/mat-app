import React from 'react';
import './SavedMeals.css';
import '/src/app/globals.css';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n'

export const SavedMeals = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['glossary', 'common'])
  return (
    <Link
      href={`/${lng}/profile/saved-meals`} >
      <button
        type="button"
        className={['savedMeals'].join(' ')}
      >
        {t('glossary:saved_button')}
      </button>
    </Link>
  );
};