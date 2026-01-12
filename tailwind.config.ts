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
        primary: '#3D5AFE',
        secondary: '#00E5FF',
        accent: '#FF4081',
        background: '#0a0a0a',
        foreground: '#fafafa',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
