import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Product } from '@/contexts/CartStateProvider'
import { CartItem, useCartState } from '@/contexts/CartStateProvider'

import React from 'react'

type BannerProductDisplayCardProps = {
    product: Product
    onAddToCart: (product: Product) => void
}

const BannerProductDisplayCard: React.FC<BannerProductDisplayCardProps> = ({
    product,
    onAddToCart,
}) => {
    return (
        <div className="inline-flex flex-none flex-col text-black bg-black bg-opacity-10 md:w-80 lg:w-96 w-60 h-full m-2 p-3 rounded-md">
            <h3 className="text-lg font-bold mb-2 truncate line-clamp-1 hover:underline">
                {product.title}
            </h3>
            <div className="relative flex-grow mb-3">
                <div className="w-full h-48 md:h-48 lg:h-60 relative overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.title + ' - ' + product.description}
                        className="w-full h-full object-cover"
                    />
                </div>
                <button onClick={() => onAddToCart(product)} className="absolute bottom-2 right-2 text-secondary text-3xl transform hover:scale-110 transition-transform ease-in-out duration-200">
                    <AiOutlinePlusCircle />
                </button>
            </div>
        </div>
    )
}

export default BannerProductDisplayCard
