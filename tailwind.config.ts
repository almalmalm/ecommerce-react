import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-black': 'var(--color-main-black)',
        'main-gray': 'var(--color-main-gray)',
        'main-blue': 'var(--color-main-blue)',
      },
      screens: {
        mobile: '320px',
        tablet: '640px',
        // => @media (min-width: 640px) { ... }
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
        fullhd: '1800px',
      },
      fontSize: {
        mobile: '0.6875rem',
      },
    },
  },
  plugins: [],
};
export default config;
