import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Product } from '@/contexts/CartStateProvider'

import React from 'react'

type BannerProductDisplayCardProps = {
    product: Product
}

const BannerProductDisplayCard: React.FC<BannerProductDisplayCardProps> = ({
    product,
}) => {
    return (
        <div className="relative flex flex-col bg-slate-100 w-80 h-full m-2 p-3 rounded-md overflow-hidden">
            <h3 className="text-lg font-bold mb-2 truncate line-clamp-1">
                {product.title}
            </h3>
            <div className="relative flex-grow mb-3">
                <div className="w-full h-40 relative overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.title + ' - ' + product.description}
                        className="w-full h-full object-cover"
                    />
                </div>
                <button className="absolute bottom-2 right-2 text-white text-3xl transform hover:scale-110 transition-transform ease-in-out duration-200">
                    <AiOutlinePlusCircle />
                </button>
            </div>
            <p className="text-sm line-clamp-2">{product.description}</p>
        </div>
    )
}

export default BannerProductDisplayCard
