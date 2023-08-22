'use client'

import { CartItem, useCartState } from '@/contexts/CartStateProvider'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import CartItemDisplayCard from './CartItemDisplayCard'

const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, cartItems, setCartItems } = useCartState()

    const handleRemove = (cartItemToRemove: CartItem) => {
        const newCartItems = cartItems.filter(
            (item) => item !== cartItemToRemove
        )
        setCartItems(newCartItems)
    }

    const updateQuantity = (
        itemToUpdate: CartItem,
        newQuantity: number
    ) => {
        setCartItems(
            cartItems.map((item) => {
                if (item.title === itemToUpdate.title) {
                    if (newQuantity == 0) {
                        return { ...item, quantity: 1 }
                    } else {
                        return { ...item, quantity: newQuantity }
                    }
                }
                return item
            })
        )
    }

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
                    {cartItems.map((item) => (
                        <CartItemDisplayCard
                            key={item.title}
                            item={item}
                            onRemove={handleRemove}
                            onQuantityChange={updateQuantity}
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
