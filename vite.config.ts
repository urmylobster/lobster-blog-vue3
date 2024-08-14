import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/**/components'],
      dts: 'src/types/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        // target: 'http://45.125.34.193:8080/',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
