/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black--primary": "#000",
        "black--secondary": "#141414",
        "black--tertiary": "#1C1C1C",
        "gray--primary": "#C0C0C0",
        "yellow--primary": "#EFEB00",
        "pink--primary": "#F700F5",
        "pink--secondary": "#F700F500",
        "blue--primary": "#0003E1",
        "green--primary": "#7AF37C",
        "green--primary2": "#467D7F",
        "green--primary3": "#31B554",
        "orange--primary": "#F97F02",
        "red--primary": "#E40037",
        "benings--color": "#E7E2DF",
        "iptracker--color": "#080801",
        "transparent--color": "#313131",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      tablet: "1280px",
    },
  },
  plugins: [],
}