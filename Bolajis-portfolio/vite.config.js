import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/substack-posts': {
        target: 'https://whatwasntsaid.substack.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/substack-posts/, '/api/v1/posts')
      },
      '/api/substack-profile': {
        target: 'https://substack.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/substack-profile/, '/api/v1/user/whatwasntsaid/public_profile')
      }
    }
  }
})
