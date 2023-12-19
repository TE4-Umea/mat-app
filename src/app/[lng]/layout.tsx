import type { Metadata } from 'next'
import { Lexend_Deca, Karla } from 'next/font/google';
import '@/app/globals.css'
import { NavBar } from '../components/storyBookComponents/navbar/navBar';
import BackgroundTime from '../components/backendComponents/timeDepender/backgroundTimeSmall';
import { useTranslation } from 'next-i18next';
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'

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
  // const session = await getServerSession();

  // if (session) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={[lexendDeca.variable, karla.className].join(" ")}>
        {children}
      </body>
    </html>
  )
  // } else if (!session) {
  //   redirect(`/${lng}/setup`)
  // }
}
