

import Navbar from '@/components/Navbar'
import { Playfair_Display, Roboto_Mono } from 'next/font/google'
import CartDrawer from '@/components/CartDrawer'

export const roboto = Roboto_Mono({
    subsets: ['latin'],
})

export default function Home() {
    return (
        <main
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url('/shoe.jpg')` }}
        >
            <div
                className="bg-cover bg-center h-screen"
            >
                <div className={roboto.className}>
                    <Navbar />
                    <CartDrawer />
                </div>
            </div>

            <div className="h-screen">blah blah</div>
        </main>
    )
}
