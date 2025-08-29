import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),react()],
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    globals: true,
  },
})
