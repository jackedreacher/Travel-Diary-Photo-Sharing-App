/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this if you have a different entry file
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/navigation/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/theme/**/*.{js,jsx,ts,tsx}",
    "./src/types/**/*.{js,jsx,ts,tsx}",
    "./src/utils/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
} 