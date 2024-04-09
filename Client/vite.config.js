import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port:3000,
    proxy : {
      // we cannot say '/' instead of '/api' as it will conflict with vite when it tries to fetch html css js files
      '/api' : {
        target: 'http://localhost:8080/' // to configure this as base url for all fetchs
      }
    }
  }
})

