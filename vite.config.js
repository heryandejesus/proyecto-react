import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'github' ? '/proyecto-react/' : '/',
    plugins: [react()],
  }
})
