/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in-backdrop": {
          "0%": { backdropFilter: "blur(0)", opacity: "0" },
          "100%": { backdropFilter: "blur(10px)", opacity: "1" },
        },
        "fade-in-content": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-out-backdrop": {
          "0%": { backdropFilter: "blur(10px)", opacity: "1" },
          "100%": { backdropFilter: "blur(0px)", opacity: "0" },
        },
        "fade-out-content": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.9)" },
        },
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "slide-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-left": "slide-left 30s linear infinite",
        "slide-right-slow": "slide-right 100s linear infinite",
        "fade-in-backdrop": "fade-in-backdrop 0.5s ease-in-out forwards",
        "fade-in-content": "fade-in-content 0.5s ease-in-out forwards",
        "fade-out-backdrop": "fade-out-backdrop 0.3s ease-in-out forwards",
        "fade-out-content": "fade-out-content 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hidden": {
          "scrollbar-width": "none", // Oculta el scrollbar en Firefox
          "-ms-overflow-style": "none", // Oculta el scrollbar en IE y Edge
        },
        ".scrollbar-hidden::-webkit-scrollbar": {
          display: "none", // Oculta el scrollbar en Chrome y Safari
        },
      });
    },
  ],
};
