// Banner.tsx
import BannerProductDisplayCard from '@/components/BannerProductDisplayCard'
import { Product } from '@/contexts/CartStateProvider'

import { sampleProducts } from '../utils/products'

const products = sampleProducts

const MainPageProductBanner: React.FC = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-60 flex flex-row overflow-x-auto whitespace-nowrap">
            {products.map((product) => (
                <BannerProductDisplayCard
                    product={product}
                    key={product.title}
                />
            ))}
        </div>
    )
}

export default MainPageProductBanner
