import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestPwa: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true
  },
  injectRegister: 'script-defer',
  manifest: {
    name: 'OFast Chat',
    short_name: 'OFast Chat',
    description: 'An app simple chat',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
    theme_color: '#ffffff',
    background_color: '#dce0e6',
    icons: [
      {
        src: '/pwa192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/pwa512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/pwa180x180.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/pwa225x225.png',
        sizes: '225x225',
        type: 'image/png'
      },
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestPwa)],
})
