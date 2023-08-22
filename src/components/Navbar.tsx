'use client'
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineDown } from 'react-icons/ai'
import Link from 'next/link'
import { useCartState } from '@/contexts/CartStateProvider'

const Navbar = () => {
    const [isAboutOpen, setIsAboutOpen] = React.useState<boolean>(false)
    const [scrollPosition, setScrollPosition] = React.useState<number>(0)

    const { isCartOpen, setIsCartOpen, products } = useCartState()

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
            console.log(scrollPosition)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {}
    }, [])

    return (
        <div
            className={`fixed top-0 left-0 w-full z-10 overflow-x-hidden transition-all duration-500 ${
                scrollPosition > 100 ? 'bg-slate-100 opacity-95' : ''
            }`}
        >
            <nav className="flex justify-between items-center my-5 mx-3 lg:mx-10 text-primary">
                <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="flex flex-row items-center lg:pr-10 pr-1 text-primary"
                >
                    <span className="m-2">About Us</span>
                    <AiOutlineDown />
                </button>
                <h1 className="text-primary text-2xl lg:text-4xl font-bold">
                    Logo
                </h1>
                <div className="flex items-center">
                    <Link
                        href="#"
                        className="bg-primary text-slate-100 px-5 py-1 rounded lg:flex items-center hidden mr-10"
                    >
                        Login
                    </Link>
                    <button
                        onClick={() => {
                            setIsCartOpen(true)
                        }}
                        className="ml-12 mr-2 lg:ml-0 text-primary"
                    >
                        <AiOutlineShoppingCart
                            style={{
                                fontSize: '30px',
                                verticalAlign: 'middle',
                            }}
                        />
                    </button>
                </div>
            </nav>
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-30 z-5"
                    onClick={() => setIsCartOpen(false)}
                ></div>
            )}
        </div>
    )
}

export default Navbar
