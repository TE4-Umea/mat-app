import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { useTranslation } from 'next-i18next';
import { Button as NavBar } from '../components/storyBookComponents/navbar/navBar';
import { Button as Background} from '../components/storyBookComponents/background/background'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background></Background>
        {children}
        <NavBar />
      </body>
    </html>
  )
}
