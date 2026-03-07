import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jawai Leopard Safari | Premium Wildlife Experience in Rajasthan',
  description:
    'Experience the majestic leopards of Jawai, Rajasthan with our premium safari packages. Luxury camping, expert guides, and unforgettable wildlife encounters.',
  keywords: ['Jawai', 'Leopard Safari', 'Rajasthan', 'Wildlife', 'Luxury Safari', 'India Safari'],
}

export const viewport: Viewport = {
  themeColor: '#8B6914',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-mono antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
