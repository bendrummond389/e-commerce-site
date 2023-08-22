import { ProductInCart } from '@/contexts/CartStateProvider'
import React from 'react'

type CartItemProps = {
    product: ProductInCart
    onRemove: (product: ProductInCart) => void
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove }) => {
    return (
        <div className="p-5 flex flex-row justify-between bg-slate-100 rounded-md m-5">
            <div className="m-1">
                <h3 className="font-bold">{product.title}</h3>
                <p>{product.price.toFixed(2)}</p>
            </div>
            <div className="flex justify-center items-center">
                <button
                    className="p-2 bg-slate-100 hover:bg-white outline rounded-md "
                    onClick={() => onRemove(product)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem
