import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        color: resolve(__dirname, 'apps/color/index.html'),
      },
    },
  },
})