import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://subtle-sunburst-5efa1a.netlify.app/portfolio-devguibarros/",
})
