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
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         colors: {},
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
   plugins: [require('tailwindcss-animate')],
};
