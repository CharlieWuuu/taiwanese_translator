import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory('/taiwanese_translator/'), // ✅ 確保正確對應 GitHub Pages
    routes: [
        { path: '/home', component: () => import('../views/Home.vue') },
        { path: '/about', component: () => import('../views/About.vue') },
        { path: '/', redirect: '/home' }, // ✅ 讓 `/` 自動導向 `/home`
    ],
});

export default router;
