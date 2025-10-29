/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          50: "#f0f8ff",
          100: "#e0f1fe",
          200: "#bae0fd",
          300: "#7dc6fb",
          400: "#38a9f6",
          500: "#2c82bb",
          600: "#1e6fa6",
          700: "#185a87",
          800: "#154a70",
          900: "#133d5c",
          950: "#0e2a40",
        },
      },
    },
  },
  plugins: [],
};
