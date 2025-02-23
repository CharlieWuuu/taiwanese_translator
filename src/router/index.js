import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory('/taiwanese_translator/'), // ✅ 直接寫死 GitHub Pages 的 base
    routes: [
        { path: '/', component: () => import('../views/Home.vue') },
        { path: '/about', component: () => import('../views/About.vue') },
    ],
});

export default router;
