import { CartItem, Product } from '@/contexts/CartStateProvider'

export const sampleItemsInCart: CartItem[] = [
    {
        title: "Nike Men's Free Rn Flyknit 18",
        description: "Men's Running Shoe",
        price: 150.0,
        image: '/nike-shoe.jpg',
        quantity: 1,
    },
    {
        title: 'Adidas Ultraboost 21',
        description: 'Running Shoe',
        price: 180.0,
        image: 'https://image_url_here.com/adidas_ultraboost_21',
        quantity: 1,
    },
    {
        title: 'Under Armour HOVR Phantom 2',
        description: "Men's Running Shoe",
        price: 150.0,
        image: 'https://image_url_here.com/under_armour_hovr_phantom',
        quantity: 1,
    },
    {
        title: 'New Balance 990v5',
        description: 'Made in US',
        price: 175.0,
        image: '/new-balance-990.jpg',
        quantity: 1,
    },
    {
        title: 'Puma RS-X³ Puzzle',
        description: "Men's Sneakers",
        price: 110.0,
        image: 'https://image_url_here.com/puma_rs_x3_puzzle',
        quantity: 1,
    },
]

export const sampleProducts: Product[] = [
    {
        title: "Nike Men's Free Rn Flyknit 18",
        description: "Men's Running Shoe",
        price: 150.0,
        image: '/nike-shoe.jpg',
    },
    {
        title: 'Vans Old Skool Shoe 21',
        description: 'Skateboarding Shoe',
        price: 180.0,
        image: '/vans-shoe.jpg',
    },
    {
        title: 'Nike SB High 16',
        description: "Men's Running Shoe",
        price: 150.0,
        image: '/nike-sb-high.jpg',
    },
    {
        title: 'New Balance 990v5',
        description: 'Made in US',
        price: 175.0,
        image: '/new-balance-990.jpg',
    },
    {
        title: 'Puma RS-X³ Puzzle',
        description: "Men's Sneakers",
        price: 110.0,
        image: '/puma-shoe.jpg',
    },
    {
      title: 'Adidas Ultraboost 21',
      description: "Men's Running Shoe",
      price: 180.0,
      image: '/adidas-ultraboost.jpg',
  },
  {
      title: 'Reebok Classic Leather',
      description: "Men's Casual Shoe",
      price: 90.0,
      image: '/reebok-classic.jpg',
  },
  {
      title: 'Converse Chuck Taylor All Star',
      description: "High Top Sneaker",
      price: 55.0,
      image: '/converse-chuck-taylor.jpg',
  },
  {
      title: 'Under Armour Project Rock 3',
      description: "Training Shoe",
      price: 140.0,
      image: '/under-armour-rock.jpg',
  },
  {
      title: 'ASICS Gel-Kayano 28',
      description: "Men's Running Shoe",
      price: 160.0,
      image: '/asics-gel-kayano.jpg',
  }
  
]
