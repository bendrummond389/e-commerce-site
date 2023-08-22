import { ProductInCart } from '@/contexts/CartStateProvider'
import React from 'react'

type CartItemProps = {
  product: ProductInCart
  onRemove: (product: ProductInCart) => void
}

const CartItem: React.FC<CartItemProps> = ({product, onRemove}) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <h5>{product.description}</h5>
      <h5>{product.price.toFixed(2)}</h5>
    </div>
  )
}

export default CartItem