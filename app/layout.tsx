import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import HealthBanner from '../src/components/HealthBanner'
import HealthFooter from '../src/components/HealthFooter'
import MobileNav from '../src/components/MobileNav'

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
    <html lang="en">
      <body>
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

