import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

// Lovelo will be loaded via CSS @font-face in globals.css
// Drop your Lovelo-Black.woff2 into public/fonts/ when ready.
// Until then, the CSS fallback (Arial Black, sans-serif) will be used.

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-sans',
  display: 'swap',
})
