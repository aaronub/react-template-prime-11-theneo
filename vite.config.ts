import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Uncomment the base path if deploying to GitHub Pages
  // base: '/YOUR-REPO-NAME/',
  server: {
    watch: {
      // Ignore the public/api folder to prevent hot reload when cron updates files
      ignored: ['**/public/api/**']
    }
  }
})