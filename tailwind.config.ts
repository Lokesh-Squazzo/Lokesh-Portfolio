// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',  // indigo-500
        secondary: '#EC4899', // pink-500
        accent: '#6EE7B7',  // teal-400
        dark: '#1F2937',    // dark gray
        lightGray: '#F3F4F6', // light gray
        bgLight: '#F9FAFB',  // white background
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
