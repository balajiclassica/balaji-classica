import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        gold: 'var(--color-gold)',
        'gold-muted': 'var(--color-gold-muted)',
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'text-dark': 'var(--color-text-dark)',
        'text-body': 'var(--color-text-body)',
        dark: 'var(--color-dark)',
      },
      fontFamily: {
        display: ['var(--font-el-messiri)', 'serif'],
        body: ['var(--font-tenor-sans)', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      }
    },
  },
  plugins: [],
};
export default config;
