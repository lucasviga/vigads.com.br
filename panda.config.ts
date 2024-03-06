import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          gray: { 
            900: { value: '#0C0C0D' },
            800: { value: '#131313' },
            700: { value: '#272727' },
            400: { value: '#6F6F6F' },
            300: { value: '#C8C8C8' },
          },
          purple: { 300: { value: '#B292FF' } },
          green: { 500: { value: '#5FB9B0' } },
          white: { value: '#ffffff' }
        }
      },
      breakpoints: {   
        xs: '320px',     
        sm: '430px',
        md: '744px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1512px',
        '3xl': '1920px',
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
