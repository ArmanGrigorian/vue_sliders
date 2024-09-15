/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wordsVerticalSliding: "wordsVerticalSliding 9000ms linear infinite",
        cardsVerticalSliding:
          "cardsVerticalSliding 25000ms ease-in-out infinite",
      },
      keyframes: {
        wordsVerticalSliding: {
          "2%, 32%": {
            transform: "translateY(-100%)",
          },
          "34%, 66%": {
            transform: "translateY(-200%)",
          },
          "68%, 100%": {
            transform: "translateY(-300%)",
          },
        },
        cardsVerticalSliding: {
          "0%": {
            opacity: 0,
            transform: "translateY(153%) scale(0.4)",
            "z-index": 0,
          },
          "2.5%, 17.5%": {
            opacity: 0.3,
            transform: "translateY(153%) scale(0.6)",
            "z-index": 1,
          },
          "22.5%, 37.5%": {
            opacity: 0.6,
            transform: "translateY(86%) scale(0.8)",
            "z-index": 2,
          },
          "42.5%, 57.5%": {
            opacity: 1,
            "pointer-events": "auto",
            transform: "translateY(0%) scale(1)",
            "z-index": 3,
          },
          "62.5%, 77.5%": {
            opacity: 0.6,
            transform: "translateY(-86%) scale(0.8)",
            "z-index": 2,
          },
          "82.5%, 97.5%": {
            opacity: 0.3,
            transform: "translateY(-153%) scale(0.6)",
            "z-index": 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-153%) scale(0.4)",
            "z-index": 0,
          },
        },
      },
    },
  },
  plugins: [],
};
