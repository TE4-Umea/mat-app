import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { useTranslation } from 'next-i18next';

import ProfileClient from '@/app/components/storyBookComponents/cards/Profile/ProfileClient'
import { getServerSession } from "next-auth";
import { Profile } from '@/app/components/storyBookComponents/cards/Profile/Profile'
import { NavProfile } from '@/app/components/storyBookComponents/navProfile/navProfile'

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession();

    return (
        <>
            <Profile></Profile>
            <NavProfile></NavProfile>
            {children}
        </>
    )
}