import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0d7a7a',
          light: '#1ab3b3',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
        },
        dark: {
          DEFAULT: '#050e14',
          mid: '#0b1e2a',
          card: '#0f2535',
        },
        success: '#2dca72',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
