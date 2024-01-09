// import { dir } from 'i18next'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import { redirect } from 'next/navigation'
// import { getServerSession } from 'next-auth'
// import { useTranslation } from 'next-i18next'

// import { NavBar } from '../../../components/storyBookComponents/navbar/navBar'
// import ProfileClient from '../../../components/storyBookComponents/profile/profileClient'
import React from 'react'

import { NavProfile } from '../../../components/storyBookComponents/navProfile/navProfile'
import { Profile } from '../../../components/storyBookComponents/profile/profile'
import { languages } from '../../../i18n/settings'

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
    children,
    params: { lng },
}: {
    children: React.ReactNode
    params: {
        lng: string
    }
}) {
    return (
        <>
            <Profile></Profile>
            <NavProfile lng={lng}></NavProfile>
            {children}
        </>
    )
}
