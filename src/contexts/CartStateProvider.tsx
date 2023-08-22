'use client'
import { sampleItemsInCart } from '@/utils/products'
import React, { createContext, useState, useContext } from 'react'

export type Product = {
  title: string
  description: string
  price: number
  image: string
}

export type CartItem = Product & {
  quantity: number
}

type CartStateContextType = {
    isCartOpen: boolean
    setIsCartOpen: (isOpen: boolean) => void
    cartItems: CartItem[]
    setCartItems: (products: CartItem[]) => void
}

type CartStateProviderProps = {
    children: React.ReactNode
}

const CartStateContext = createContext<CartStateContextType | undefined>(
    undefined
)

export const useCartState = () => {
    const context = useContext(CartStateContext)
    if (!context) {
        throw new Error('useCartState must be used within a CartStateProvider')
    }
    return context
}

export const CartStateProvider: React.FC<CartStateProviderProps> = ({
    children,
}) => {

    const items = sampleItemsInCart;
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>(items)

    return (
        <CartStateContext.Provider
            value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems }}
        >
            {children}
        </CartStateContext.Provider>
    )
}
