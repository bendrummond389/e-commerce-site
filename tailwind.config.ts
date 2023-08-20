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
        'text': '#0a0821',
        'background': '#f7f7fd',
        'primary': '#1f1967',
        'secondary': '#beb9ee',
        'accent': '#362bb1',
      },
      fontFamily: {
        sans: ['var(--font-playfair)']
      }
    },
  },
  plugins: [],
}
export default config
