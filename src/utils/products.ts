import { CartItem, Product } from '@/contexts/CartStateProvider'

export const sampleItemsInCart: CartItem[] = [
    {
        title: "Nike Men's Free Rn Flyknit 18",
        description: "Men's Running Shoe",
        price: 150.0,
        image: '/nike-shoe.jpg',
        quantity: 1
    },
    {
        title: 'Adidas Ultraboost 21',
        description: 'Running Shoe',
        price: 180.0,
        image: 'https://image_url_here.com/adidas_ultraboost_21',
        quantity: 1
    },
    {
        title: 'Under Armour HOVR Phantom 2',
        description: "Men's Running Shoe",
        price: 150.0,
        image: 'https://image_url_here.com/under_armour_hovr_phantom',
        quantity: 1
    },
    {
        title: 'New Balance 990v5',
        description: 'Made in US',
        price: 175.0,
        image: 'https://image_url_here.com/new_balance_990v5',
        quantity: 1
    },
    {
        title: 'Puma RS-X³ Puzzle',
        description: "Men's Sneakers",
        price: 110.0,
        image: 'https://image_url_here.com/puma_rs_x3_puzzle',
        quantity: 1
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
      title: 'Vans Ultraboost 21',
      description: 'Skateboarding Shoe',
      price: 180.0,
      image: '/vans-shoe.jpg',
  },
  {
      title: 'Under Armour HOVR Phantom 2',
      description: "Men's Running Shoe",
      price: 150.0,
      image: 'https://image_url_here.com/under_armour_hovr_phantom',
  },
  {
      title: 'New Balance 990v5',
      description: 'Made in US',
      price: 175.0,
      image: 'https://image_url_here.com/new_balance_990v5',
  },
  {
      title: 'Puma RS-X³ Puzzle',
      description: "Men's Sneakers",
      price: 110.0,
      image: 'https://image_url_here.com/puma_rs_x3_puzzle',
  },
]
