/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: '#27272a',
        input: '#27272a',
        ring: '#d4891a',
        background: '#09090b',
        foreground: '#fafafa',
        primary: {
          DEFAULT: '#F5A623',
          foreground: '#09090b',
        },
        secondary: {
          DEFAULT: '#27272a',
          foreground: '#fafafa',
        },
        muted: {
          DEFAULT: '#18181b',
          foreground: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#27272a',
          foreground: '#fafafa',
        },
        card: {
          DEFAULT: '#0f0f12',
          foreground: '#fafafa',
        },
        gold: {
          50:  '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFDA6A',
          400: '#FFD043',
          500: '#F5A623',
          600: '#D4891A',
          700: '#B36D12',
          800: '#8C5410',
          900: '#6B3E0C',
        },
        casino: {
          950: '#09090b',
          900: '#0f0f12',
          800: '#18181b',
          700: '#1e1e22',
          600: '#27272a',
          500: '#3f3f46',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(245,166,35,0.08) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
};
