import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ffffff',
        'background': '#000000',
        'primary': '#9b9bff',
        'secondary': '#e9e2be',
        'accent': '#75717f',
      },
      fontFamily: {
        sans: ['var(--font-playfair)']
      }
    },
  },
  plugins: [],
}
export default config
