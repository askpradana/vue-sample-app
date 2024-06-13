import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url))
    },
    base: '/vue-sample-app/'
    // server: {
    //   cors: true,
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:3000',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // }
  })
)
