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
        'second-black': 'var(--color-second-black)',
        'main-gray': 'var(--color-main-gray)',
        'main-blue': 'var(--color-main-blue)',
        'main-green': 'var(--color-main-green)',
        'second-gray': 'var(--color-second-gray)',
        'third-gray': 'var(--color-third-gray)',
        'fourth-gray': 'var(--color-fourth-gray)',
        'fifth-gray': 'var(--color-fifth-gray)',
        'modal-shadow': 'var(--color-modal-shadow)',
      },
      screens: {
        mobile: '375px',
        tablet: '640px',
        // => @media (min-width: 640px) { ... }
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
        fullhd: '1800px',
      },
      fontSize: {
        mobile_small: '0.55rem',
        mobile: '0.6875rem',
        ten: '0.625rem',
      },
    },
  },
  plugins: [],
};
export default config;
