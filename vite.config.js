import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => ({
    base: mode === 'production' ? '/taiwanese_translator/' : '/',
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: '台語翻譯器',
                short_name: '台語翻譯',
                start_url: '/taiwanese_translator/', // ✅ 這裡仍然要設定正確的 start_url
                scope: '/taiwanese_translator/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#007bff',
                icons: [
                    {
                        src: '/taiwanese_translator/icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/taiwanese_translator/icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
}));
