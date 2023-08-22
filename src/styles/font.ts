import { Playfair_Display, Roboto_Mono } from 'next/font/google'

export const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
})

export const roboto = Roboto_Mono({
    subsets: ['latin'],
})
