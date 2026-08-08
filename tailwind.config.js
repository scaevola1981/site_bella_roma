/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-container": "#554300",
        "on-primary": "#3c2f00",
        "on-secondary-fixed": "#1f1b19",
        "surface-container-lowest": "#100e0c",
        "primary-fixed": "#ffe088",
        "on-error-container": "#ffdad6",
        "surface-variant": "#373432",
        "outline-variant": "#4d4635",
        "on-secondary-container": "#bfb7b3",
        "surface-container-highest": "#373432",
        "primary": "#f2ca50",
        "on-primary-fixed-variant": "#574500",
        "inverse-on-surface": "#33302d",
        "primary-fixed-dim": "#e9c349",
        "surface-tint": "#e9c349",
        "tertiary-container": "#b5b2ae",
        "on-tertiary-fixed-variant": "#484743",
        "on-error": "#690005",
        "error": "#ffb4ab",
        "on-tertiary-container": "#464541",
        "surface-dim": "#151311",
        "primary-container": "#d4af37",
        "inverse-surface": "#e8e1dd",
        "background": "#151311",
        "error-container": "#93000a",
        "on-secondary-fixed-variant": "#4b4643",
        "on-background": "#e8e1dd",
        "surface-bright": "#3c3936",
        "on-tertiary-fixed": "#1c1c19",
        "on-surface": "#e8e1dd",
        "surface": "#151311",
        "outline": "#99907c",
        "surface-container-low": "#1d1b19",
        "on-surface-variant": "#d0c5af",
        "surface-container": "#221f1d",
        "secondary-fixed": "#eae1dd",
        "surface-container-high": "#2c2927",
        "on-secondary": "#342f2d",
        "tertiary-fixed-dim": "#c9c6c1",
        "tertiary-fixed": "#e6e2dd",
        "secondary-container": "#4e4845",
        "secondary": "#cec5c1",
        "on-primary-fixed": "#241a00",
        "inverse-primary": "#735c00",
        "secondary-fixed-dim": "#cec5c1",
        "tertiary": "#d1cdc9",
        "on-tertiary": "#31302d"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "container-max": "1280px",
        "section-gap": "120px",
        "margin-desktop": "80px",
        "gutter": "24px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "body-md": ["Manrope", "sans-serif"],
        "headline-md": ["Playfair Display", "serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "label-caps": ["Manrope", "sans-serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "display-lg": ["Playfair Display", "serif"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
