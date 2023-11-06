import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  define: {
    "import.meta.env.VITE_API_KEY": JSON.stringify(
      process.env.VITE_API_KEY || "dec191961fd56485973094690e9816d1"
    ),
  },
});
