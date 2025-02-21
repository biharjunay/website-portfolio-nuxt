// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: [
    'nuxt-file-storage',
    'nuxt-echarts',
    'nuxt-authorization',
    'nuxt-auth-utils',
    '@pinia/nuxt',
    '@nuxt/ui'
  ],
  fileStorage: {
    mount: process.env.MOUNT
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    'string_decoder': 'string_decoder/',
  },
  nitro: {
    experimental: {
      tasks: true,
    },
    plugins: ['plugins/error.ts'],
    preset: "vercel"
  },
  echarts: {
    charts: ['LineChart'],
    components: ['GridComponent', "TooltipComponent", "DatasetComponent", "LegendComponent"]
  },
  hooks: {
    ready: () => {
      console.log(process.cwd())
    },
        
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