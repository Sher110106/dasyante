import type { Metadata } from 'next'
import { cormorant, dmSans } from '@/lib/fonts'
import './globals.css'
import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Dasyante — Curated Jewellery Marketplace',
  description: 'Jewellery, curated by story — not algorithms. Discover pieces you understand, not just browse.',
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
        <NavigationBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  )
}
