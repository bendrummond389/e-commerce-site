'use client'

import { useCartState } from '@/contexts/CartStateProvider'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import CartItem from './CartItem'

const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, products } = useCartState()

    return (
        <div
            className={`fixed overflow-hidden z-10 inset-0 transform ease-in-out transition-all duration-400 ${
                isCartOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
            }`}
        >
            <div
                className={`w-screen max-w-lg right-0 absolute bg-white h-full duration-200 ease-in-out transition-all transform ${
                    isCartOpen ? 'shadow-xl translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                    <div className="p-5 font-bold text-lg flex justify-between text-center">
                        <div></div>
                        <h1 className="text-primary">Your Cart</h1>
                        <button onClick={() => setIsCartOpen(false)}>
                            <AiOutlineClose style={{ fontSize: '30px' }} />
                        </button>
                    </div>
                    {products.map((product) => (
                        <CartItem
                            product={product}
                            onRemove={(product) => console.log(product.title)}
                        />
                    ))}
                </div>
            </div>
            <div
                className="w-screen h-full cursor-pointer"
                onClick={() => {
                    setIsCartOpen(false)
                }}
            ></div>
        </div>
    )
}
export default CartDrawer
