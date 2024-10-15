import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        color: resolve(__dirname, 'apps/color/index.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})