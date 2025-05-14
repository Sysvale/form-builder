import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'FormBuilder',
      fileName: (format) => `form-builder.${format}.js`
    },
    rollupOptions: {
      external: ['vue', '@sysvale/cuida'],
      output: {
        globals: {
          vue: 'Vue',
          '@sysvale/cuida': 'Cuida'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'form-builder.css';
          }
          return assetInfo.name;
        }
      }
    },
    cssCodeSplit: false
  }
})