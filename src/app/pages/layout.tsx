import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { useTranslation } from 'next-i18next';
import { Button as NavBar } from '../components/storyBookComponents/navbar/navBar';
import BackgroundTime from '../components/timeDepender/backgroundTimeSmall';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <BackgroundTime></BackgroundTime>
      {children}
      <NavBar />
    </div>
  )
}
