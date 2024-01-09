import '@/app/globals.css'

// import { dir } from 'i18next'
// import { useTranslation } from 'next-i18next'
import type { Metadata } from 'next'
// import { Karla, Lexend_Deca } from 'next/font/google'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import React from 'react'

import BackgroundClouds from '@/app/components/backgroundClouds'
import { NavBar } from '@/app/components/storyBookComponents/navbar/navBar'
import { languages } from '@/app/i18n/settings'

// export const lexendDeca = Lexend_Deca({
//     weight: ['200', '300', '400', '500', '600', '700', '800'],
//     subsets: ['latin'],
//     variable: '--font-title',
// })

// export const karla = Karla({
//     weight: ['200', '300', '400', '500', '600', '700', '800'],
//     subsets: ['latin'],
// })

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
    title: 'mat-app',
    description: 'Generated by create next app',
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
    const session = await getServerSession()
    const today = new Date()

    if (session) {
        return (
            <>
                <BackgroundClouds
                    size={'small'}
                    light={today.getHours() <= 15 ? true : false}
                />
                {children}
                <NavBar lng={lng} />
            </>
        )
    } else if (!session) {
        redirect(`/${lng}/setup`)
    }
}
