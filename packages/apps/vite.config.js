import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        color: resolve(__dirname, 'apps/color/index.ts'),
        time: resolve(__dirname, 'apps/time/index.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})