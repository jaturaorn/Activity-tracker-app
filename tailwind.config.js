/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-pink' : '#FF4878',
        'main-purple' : '#6f36BC',
        "main-dark-purple": "#35174D",
        "main-light-purple": "#F3EFFE",
        "black-backdrop": "rgba(77, 77, 77, .9)"
      },
      spacing: {
        "400": "400px",
        "550": "550px",
        "900": "900px",
      },
      backgroundSize: {
        "100": "100% 100%"
      },
      maxWidth: {
        "7xl" : "80rem",
      },
      minWidth: {
        "300": "300px"
      },
      height: {
        "screen-1/4": "25vh",
        "screen-2/4": "50vh",
      }
    },
  },
  plugins: [],
}

