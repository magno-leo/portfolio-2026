import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio-2026/', 

  css: {
    preprocessorOptions: {
      scss: {

        silenceDeprecations: ['import'],
      }
    }
  },

  build: {
    chunkSizeWarningLimit: 2000,
  }
})
