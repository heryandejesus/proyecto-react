import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'github' ? '/proyecto-react/' : '/',
    plugins: [
      react(),
      tailwindcss()
    ],
  }
})

