import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    base: '/', // ⚠️ 這裡一定要改成你的 GitHub Repository 名稱！
    plugins: [
        vue(),
        VitePWA({
            manifest: {
                name: '台語翻譯器',
                short_name: '台語翻譯',
                start_url: '/taiwanese_translator/', // ✅ 確保這裡指向 /你的倉庫名稱/
                scope: '/taiwanese_translator/', // ✅ 確保這裡指向 /你的倉庫名稱/
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#007bff',
                icons: [
                    {
                        src: '/taiwanese_translator/icons/icon-192x192.png', // ✅ 這裡的路徑要加上 /你的倉庫名稱/
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
});
