'use client'
import BannerProductDisplayCard from '@/components/banner/BannerProductDisplayCard'
import { Product, useCartState } from '@/contexts/CartStateProvider'
import { CartItem } from '@/contexts/CartStateProvider'

import { sampleProducts } from '../../utils/products'

const products = sampleProducts

const MainPageProductBanner: React.FC = () => {
    const { itemsInCart, setItemsInCart } = useCartState()

    const addProductToCart = (productToAdd: Product) => {
        const existingProduct = itemsInCart.find(
            (item) => item.title === productToAdd.title
        )

        if (existingProduct) {
            setItemsInCart(
                itemsInCart.map((item) => {
                    if (item.title === productToAdd.title) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            )
        } else {
            setItemsInCart([...itemsInCart, { ...productToAdd, quantity: 1 }])
        }
    }

    return (
        <div className="h-full bottom-0 left-0 w-full flex flex-row overflow-x-auto whitespace-nowrap">
            {products.map((product) => (
                <BannerProductDisplayCard
                    product={product}
                    key={product.title}
                    onAddToCart={addProductToCart}
                />
            ))}
        </div>
    )
}

export default MainPageProductBanner
