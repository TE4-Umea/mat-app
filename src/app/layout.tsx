import type { Metadata } from 'next'
import { Lexend_Deca, Karla } from 'next/font/google';
import './globals.css'
import Head from 'next/head';

import { useTranslation } from 'next-i18next';

export const lexendDeca = Lexend_Deca({ weight: ['200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'], variable: "--font-title", });

export const karla = Karla({ weight: ['200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });


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
    <html lang="en">
      <body className={[lexendDeca.variable, karla.className].join(" ")}>
        {children}
      </body>
    </html>
  )
}
