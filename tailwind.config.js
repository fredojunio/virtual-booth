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
        moss: {
          50: "#f3f7ec",
          100: "#e6efd9",
          200: "#cce0b3",
          300: "#b3d08e",
          400: "#99c168",
          500: "#80b142", // Base color adjusted
          600: "#669e2d",
          700: "#4d7a22",
          800: "#335717",
          900: "#1a340b",
          950: "#1A2E06", // Your original color
        },

        // Teal Blue (from #106E77)
        teal: {
          50: "#e8f7f9",
          100: "#d1eff3",
          200: "#a3dfe7",
          300: "#76cedb",
          400: "#48becf",
          500: "#1aaec3", // Base color adjusted
          600: "#158d9e",
          700: "#106E77", // Your original color
          800: "#0b4e55",
          900: "#062f33",
          950: "#041f22",
        },

        // Misty Sage (from #D1DBCD)
        mist: {
          50: "#f9fbf8",
          100: "#f3f7f1",
          200: "#e7efe3",
          300: "#dbe7d5",
          400: "#cfdfc7",
          500: "#c3d7b9", // Base color adjusted
          600: "#a7bf9d",
          700: "#8ba781",
          800: "#6f8f65",
          900: "#536749",
          950: "#3d4f35",
        },

        // Forest Green (from #446A25)
        forest: {
          50: "#f2f6ed",
          100: "#e5eddb",
          200: "#cbdbb7",
          300: "#b1c993",
          400: "#97b76f",
          500: "#7da54b", // Base color adjusted
          600: "#648339",
          700: "#4b6228",
          800: "#32421b",
          900: "#19210e",
          950: "#0f1509",
        },

        // Greenish Cyan (from #62A29E)
        cyan: {
          50: "#edf7f6",
          100: "#dbefee",
          200: "#b7dfdd",
          300: "#93cfcb",
          400: "#6fbfba",
          500: "#4bafa9", // Base color adjusted
          600: "#3a8d88",
          700: "#296b67",
          800: "#1c4a46",
          900: "#0f2926",
          950: "#091917",
        },
      },
    },
  },
  plugins: [],
};
