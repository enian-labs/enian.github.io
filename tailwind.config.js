import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
   darkMode: ['class'],
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
      },
      extend: {
         textShadow: {
            sm: '0 1px 2px var(--tw-shadow-color)',
            DEFAULT: '0 2px 4px var(--tw-shadow-color)',
            lg: '0 8px 16px var(--tw-shadow-color)',
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         colors: {
            "custom-blue": '#14B9D6',
         },
         screens: {
            xt: '321px',
            ty: '380px',
            xs: '428px',
         },
         fontFamily: {
            mikado: ['Mikado', 'sans-serif'],
         },
         keyframes: {
            bouncing: {
               '0%': { transform: 'translateY(0)' },
               '100%': { transform: 'translateY(-20px)' },
            },
         },
         animation: {
            bouncing: 'bouncing 2s ease infinite alternate',
         },
      },
   },
   plugins: [
      require('tailwindcss-animate'),
      plugin(function ({ matchUtilities, theme }) {
         matchUtilities(
            {
               'text-shadow': (value) => ({
                  textShadow: value,
               }),
            },
            { values: theme('textShadow') }
         )
      }),
   ],
};
