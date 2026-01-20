import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base:'/dark-mode-toggle/',
  plugins: [
    tailwindcss(),
  ],
})
