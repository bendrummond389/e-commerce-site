'use client'

import React from 'react'
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    return (
        <div className="overflow-x-hidden">
            <nav className="flex justify-between my-5">
                <h1>Shop Name</h1>

                <div className="mx-5">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineShoppingCart style={{ fontSize: '30px' }} />
                    </button>
                </div>
            </nav>
            <div
                className={`bg-secondary fixed right-0 top-0 h-full transition-all ease-in-out duration-300 ${
                    isOpen ? 'w-full md:w-2/5 lg:w-1/5' : 'w-0'
                }`}
            >
                <div className="m-5 flex justify-between">
                    <div></div>
                    <h1>Your Cart</h1>
                    <button onClick={() => setIsOpen(false)}>
                        <AiOutlineClose style={{ fontSize: '30px' }} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
