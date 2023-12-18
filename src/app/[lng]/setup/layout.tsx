import type { Metadata } from 'next'
import { Lexend_Deca, Karla } from 'next/font/google';
import '../../globals.css'


import { useTranslation } from 'next-i18next';


export const metadata: Metadata = {
  title: 'mat-app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={["backgroundGlobal"].join(" ")}>
      {children}
    </main>

  )
}
