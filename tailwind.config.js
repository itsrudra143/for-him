/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "birthday-pink": "#FFC0CB",
        "birthday-purple": "#D8BFD8",
        "birthday-blue": "#ADD8E6",
        "birthday-yellow": "#FFFACD",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sparkle: "sparkle 1.5s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: 0, transform: "scale(0)" },
          "50%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
