import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "#F00" },
        green: { DEFAULT: "#0F0" },
        blue: { DEFAULT: "#00F" },
        teal: {
          100: "#096",
        },
      },
    },
  },
});
