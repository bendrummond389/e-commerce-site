import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import RootProvider from '@/contexts/RootProvider'
import CartDrawer from '@/components/CartDrawer/CartDrawer'
import { playfair, roboto } from '@/styles/font'

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
            <body className={`${playfair.variable} font-sans`}>
                <RootProvider>
                    <div className={roboto.className}>
                        <Navbar />
                        <CartDrawer />
                    </div>
                    {children}
                </RootProvider>
            </body>
        </html>
    )
}
