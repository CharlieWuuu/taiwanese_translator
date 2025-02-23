import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // ✅ 這樣 `vite.config.js` 的 `base` 會自動帶入
    routes: [
        { path: '/', component: () => import('../views/Home.vue') },
        { path: '/about', component: () => import('../views/About.vue') },
    ],
});

export default router;
