import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Roboto_Mono } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const roboto = Roboto_Mono({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'E-Commerce Site',
  description: 'A sample e-commerce app written by Ben Drummond',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <div className={`${playfair.variable} font-sans`}>{children}</div>
        </body>
    </html>
  )
}
