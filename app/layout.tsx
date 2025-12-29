import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import HealthBanner from '../src/components/HealthBanner'
import HealthFooter from '../src/components/HealthFooter'
import MobileNav from '../src/components/MobileNav'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Health & Wellness',
  description: 'Evidence-based health protocols, personal journey, and comprehensive resources for optimal health and longevity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <HealthBanner />
          <main className="flex-1">
            {children}
          </main>
          <HealthFooter />
          <MobileNav />
          <Analytics />
        </div>
      </body>
    </html>
  )
}

