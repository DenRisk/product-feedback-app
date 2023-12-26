import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/product-feedback-app/",
  plugins: [react(), svgr()],
})
