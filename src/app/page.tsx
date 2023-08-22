import Navbar from '@/components/Navbar'
import { Playfair_Display, Roboto_Mono } from 'next/font/google'
import CartDrawer from '@/components/CartDrawer'

export default function Home() {
    return (
        <main>
            <div
                className="bg-cover bg-center h-screen"
                style={{ backgroundImage: `url('/shoe.jpg')` }}
            >
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-60 h-60">
                    <h1>Stuff</h1>
                </div>
            </div>

            <div className="h-screen">blah blah</div>
        </main>
    )
}
