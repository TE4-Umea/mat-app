import type { Metadata } from 'next'
import '@/app/globals.css'
import { NavBar } from '../components/storyBookComponents/navbar/navBar';
import BackgroundTime from '../components/backendComponents/timeDepender/backgroundTimeSmall';
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { useTranslation } from 'next-i18next';

import { dir } from 'i18next'
import { languages } from '../../i18n/settings'

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
