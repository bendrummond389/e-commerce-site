import BannerProductDisplayCard from '@/components/BannerProductDisplayCard'
import MainPageProductBanner from '@/components/MainPageProductBanner'
import { Product } from '@/contexts/CartStateProvider'
import { sampleProducts } from '@/utils/products'

const test: Product = {
    title: "Nike Men's Free Rn Flyknit 18",
    description: "Men's Running Shoe",
    price: 150.0,
    image: '/nike-shoe.jpg',
}

const productsInBanner = sampleProducts
export default function Home() {
    return (
        <main>
            <div
                className="bg-cover bg-center h-screen"
                style={{ backgroundImage: `url('/shoe.jpg')` }}
            >
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-60 flex flex-row">
                    <MainPageProductBanner />
                </div>
            </div>

            <div className="h-screen">blah blah</div>
        </main>
    )
}
