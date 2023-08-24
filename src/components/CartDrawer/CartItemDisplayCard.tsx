import { CartItem } from '@/contexts/CartStateProvider'
import React from 'react'

type CartItemDisplayCardProps = {
    item: CartItem
    onRemove: (item: CartItem) => void
    onQuantityChange: (item: CartItem, quantity: number) => void
}

const CartItemDisplayCard: React.FC<CartItemDisplayCardProps> = ({
    item,
    onRemove,
    onQuantityChange,
}) => {
    return (
        <div className="p-5 flex flex-row justify-between bg-slate-100 rounded-md m-5">
            <div className="m-1">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.price.toFixed(2)}</p>
            </div>

            <div className="flex justify-center items-center">
                <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                        onQuantityChange(item, Number(e.target.value))
                    }}
                    className="w-10 h-6 mr-2 text-center outline outline-slate-200 rounded"
                    min="1"
                />
                <button
                    className="p-2 bg-slate-100 hover:bg-white outline rounded-md "
                    onClick={() => onRemove(item)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItemDisplayCard
