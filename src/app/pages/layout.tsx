import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { useTranslation } from 'next-i18next';
import { NavBar } from '../components/storyBookComponents/navbar/navBar';

import BackgroundTime from '../components/backendComponents/timeDepender/backgroundTimeSmall';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BackgroundTime></BackgroundTime>
      {children}
      <NavBar />
    </>
  )
}
