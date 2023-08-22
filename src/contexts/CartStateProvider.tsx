'use client'
import React, { createContext, useState, useContext } from 'react'

export type ProductInCart = {
    title: string
    description: string
    price: number
    image: string
    quantity: number
}

type CartStateContextType = {
    isCartOpen: boolean
    setIsCartOpen: (isOpen: boolean) => void
    products: ProductInCart[]
    setProducts: (products: ProductInCart[]) => void
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
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [products, setProducts] = useState<ProductInCart[]>([
        {
            title: 'Nike Air Max 97',
            description: "Men's Shoe",
            price: 170.0,
            image: 'https://image_url_here.com/nike_air_max_97',
            quantity: 1,
        },
        {
            title: 'Adidas Ultraboost 21',
            description: 'Running Shoe',
            price: 180.0,
            image: 'https://image_url_here.com/adidas_ultraboost_21',
            quantity: 1,
        },
        {
            title: 'Under Armour HOVR Phantom 2',
            description: "Men's Running Shoe",
            price: 150.0,
            image: 'https://image_url_here.com/under_armour_hovr_phantom',
            quantity: 1,
        },
        {
            title: 'New Balance 990v5',
            description: 'Made in US',
            price: 175.0,
            image: 'https://image_url_here.com/new_balance_990v5',
            quantity: 1,
        },
        {
            title: 'Puma RS-X³ Puzzle',
            description: "Men's Sneakers",
            price: 110.0,
            image: 'https://image_url_here.com/puma_rs_x3_puzzle',
            quantity: 1,
        },
    ])

    return (
        <CartStateContext.Provider
            value={{ isCartOpen, setIsCartOpen, products, setProducts }}
        >
            {children}
        </CartStateContext.Provider>
    )
}
