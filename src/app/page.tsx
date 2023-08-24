import BannerProductDisplayCard from '@/components/banner/BannerProductDisplayCard'
import MainPageProductBanner from '@/components/banner/MainPageProductBanner'
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
                style={{ backgroundImage: `url('/hero-background-5.jpg')` }}
            >
                <div className="absolute space-y-3 bottom-4 left-4 p-5 mb-10 bg-black bg-opacity-30 rounded-lg text-white">
                    <h2 className="text-5xl">Tagline here</h2>
                    <h3 className="text-2xl">
                        Come buy our stuff because were hip
                    </h3>
                    <button className="rounded font-bold px-2 py-1 bg-accent">
                        Shop Now
                    </button>
                </div>
            </div>

            <div className="w-full bg-slate-100 bg-opacity-60 flex flex-col">
                <div className="text-center m-3">
                    <h3 className="font-bold text-3xl mb-4">New Arrivals</h3>
                    <MainPageProductBanner />
                </div>
            </div>
        </main>
    )
}
