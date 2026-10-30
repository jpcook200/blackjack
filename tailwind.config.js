/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        custom: ['LiberationSans-Regular'],
        bold: ['LiberationSans-Bold'],
      },
      colors: {
        primary: "#23DB7F", // primary app colour for branding
        text: {
          light: "#000000", // light theme color
          dark: "#FFFFFF",  // dark theme color
        },
        bg: {
          light: "#e4e4e4",
          dark: "#161616"
        },
        item: {
          light: "#d4d4d4",
          dark: "#0b0b0b"
        },
        border: {
          light: "#373737",
          dark: "#4d4d4d"
        }
      },
    },
  },
  plugins: [],
};
