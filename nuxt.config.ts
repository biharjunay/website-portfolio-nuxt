// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['nuxt-file-storage', '@nuxthub/core'],
  fileStorage: {
    mount: process.env.MOUNT
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    experimental: {
      tasks: true
    },
    plugins: ['plugins/error.ts'],
  },
  hub: {
    database: true
  },
  hooks: {
    ready: () => {
      console.log('ready')
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  }
})
