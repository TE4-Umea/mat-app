'use client'
import React from 'react';
import './navProfile.css';
import '/src/app/globals.css';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { languages } from '../../../i18n/settings'
import { useTranslation } from '@/app/i18n'

/**
 * Primary UI component for user interaction
 */
export const NavProfile = async ({ lng }) => {
    const pathname = usePathname();
    const { t } = await useTranslation(lng, ['glossary', 'common'])

    return (
        <>
            <div className='profileNavContainer'>
                <Link className={(pathname === `/${lng}/profile/stats` ? "profileNavActive" : "profileNavLink")} href={`/${lng}/profile/stats`}>
                    {t('common:statistics')}
                </Link>
                <Link className={(pathname === `/${lng}/profile/settings` ? "profileNavActive" : "profileNavLink")} href={`/${lng}/profile/settings`}>
                    {t('common:settings')}
                </Link>
                <Link className={(pathname === `/${lng}/profile/saved-meals` ? "profileNavActive" : "profileNavLink")} href={`/${lng}/profile/saved-meals`}>
                    {t('common:saved')}
                </Link>
            </div>
        </>
    );
};
