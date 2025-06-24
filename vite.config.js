// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base:'/Spa-Beauty/',
  server: {
    watch: {
      usePolling: true, //  Fuerza Vite a hacer polling en lugar de eventos del SO
      interval: 100     //  Opcional: intervalo en milisegundos
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
})
