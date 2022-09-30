import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";
import { qrcode } from "vite-plugin-qrcode";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qrcode(), // only applies in dev mode,
    react(),
    WindiCSS(),
    Pages(),
  ],
  server: { host: true },
});
