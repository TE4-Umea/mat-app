import React from 'react';
import './SavedMeals.css';
import '/src/app/globals.css';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n'

export async function SavedMeals({ params: { lng } }) {
  const { t } = await useTranslation(lng, ['glossary', 'common'])
  return (
    <Link
      href="/profile/saved-meals" >
      <button
        type="button"
        className={['savedMeals'].join(' ')}
      >
        {t('glossary:saved_button')}
      </button>
    </Link>
  );
};