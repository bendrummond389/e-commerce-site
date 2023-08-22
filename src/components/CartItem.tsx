import { ProductInCart } from '@/contexts/CartStateProvider'
import React from 'react'

type CartItemProps = {
    product: ProductInCart
    onRemove: (product: ProductInCart) => void
    onQuantityChange: (product: ProductInCart, quantity: number) => void
}

const CartItem: React.FC<CartItemProps> = ({
    product,
    onRemove,
    onQuantityChange,
}) => {
    return (
        <div className="p-5 flex flex-row justify-between bg-slate-100 rounded-md m-5">
            <div className="m-1">
                <h3 className="font-bold">{product.title}</h3>
                <p>{product.price.toFixed(2)}</p>
            </div>

            <div className="flex justify-center items-center">
                <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => {
                        onQuantityChange(product, Number(e.target.value))
                    }}
                    className="w-12 h-6 mr-2 text-center outline outline-slate-200 rounded"
                    min="1"
                />
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
