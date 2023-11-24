import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { useTranslation } from 'next-i18next';
import { Button as NavBar } from '../components/storyBookComponents/navbar/navBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <NavBar />
      </body>
    </html>
  )
}
