import type { Metadata } from 'next'
import { cormorant, dmSans } from '@/lib/fonts'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import GrainOverlay from '@/components/ui/GrainOverlay'

export const metadata: Metadata = {
  title: 'Dasyante — Coming Soon',
  description: 'A curated marketplace for demi-fine jewellery. Join the waitlist.',
  openGraph: {
    title: 'Dasyante',
    description: 'Curated jewellery. Trusted brands. One place.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        <CustomCursor />
        <GrainOverlay />
      </body>
    </html>
  )
}
