'use client'
import React, { createContext, useState, useContext } from 'react'

export type ProductInCart = {
    title: String
    description: String
    price: Number
}

type CartStateContextType = {
    isCartOpen: boolean
    setIsCartOpen: (isOpen: boolean) => void
    products: ProductInCart[]
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
      { title: "Apple iPhone 13", description: "64GB, Midnight", price: 699.00 },
      { title: "Samsung Galaxy S21", description: "128GB, Phantom Gray", price: 799.99 },
      { title: "Amazon Echo Dot (4th Gen)", description: "Smart Speaker with Alexa", price: 49.99 },
      { title: "Sony WH-1000XM4", description: "Wireless Noise-Cancelling Headphones", price: 278.00 },
      { title: "Apple MacBook Air (M1, 2020)", description: "13-inch, 8GB RAM, 256GB SSD", price: 999.00 }
    ])

    return (
        <CartStateContext.Provider
            value={{ isCartOpen, setIsCartOpen, products }}
        >
            {children}
        </CartStateContext.Provider>
    )
}
