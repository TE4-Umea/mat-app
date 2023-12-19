import type { Metadata } from 'next'
import '@/app/globals.css'
import { NavBar } from '@/app/components/storyBookComponents/navbar/navBar';
import BackgroundTime from '@/app/components/backendComponents/timeDepender/backgroundTimeSmall';
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { Lexend_Deca, Karla } from 'next/font/google';

import { useTranslation } from 'next-i18next';

import { dir } from 'i18next'
import { languages } from '@/app/i18n/settings'

export const lexendDeca = Lexend_Deca({ weight: ['200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'], variable: "--font-title", });

export const karla = Karla({ weight: ['200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });


export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
    title: 'mat-app',
    description: 'Generated by create next app',
}

export default async function RootLayout({
    children,
    params: {
        lng
    }
}: {
    children: React.ReactNode,
    params: {
        lng: string
    }
}) {
    const session = await getServerSession();

    if (session) {
        return (
            <>
                <BackgroundTime></BackgroundTime>
                {children}
                <NavBar lng={lng} />
            </>
        )
    } else if (!session) {
        redirect(`/${lng}/setup`)
    }
}
