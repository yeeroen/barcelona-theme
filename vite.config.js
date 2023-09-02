import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@vemedia/article-highlight': path.resolve(__dirname, './src/components/bcn-article-highlight'),
      '@vemedia/article-link': path.resolve(__dirname, './src/components/bcn-article-link'),
      '@vemedia/breadcrumbs': path.resolve(__dirname, './src/components/bcn-breadcrumbs'),
      '@vemedia/button': path.resolve(__dirname, './src/components/bcn-button'),
    },
  },
})
