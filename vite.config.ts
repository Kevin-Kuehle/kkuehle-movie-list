import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@components': path.resolve(__dirname, 'src/components'),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@views': path.resolve(__dirname, 'src/views'),
      '@stores': path.resolve(__dirname, 'src/stores')
    }
  },
  css: {
    devSourcemap: true
  }
})
