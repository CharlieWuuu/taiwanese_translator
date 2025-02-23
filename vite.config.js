import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: '台語翻譯器',
                short_name: '台語翻譯',
                description: '一個可以翻譯台語並發音的網站',
                theme_color: '#007bff',
                background_color: '#ffffff',
                display: 'standalone',
                start_url: '/',
                icons: [
                    {
                        src: '/icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: ({ request }) => request.destination === 'image',
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 天
                            },
                        },
                    },
                    {
                        urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'static-resources',
                        },
                    },
                ],
            },
        }),
    ],
});
