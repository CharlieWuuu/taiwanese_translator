import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory('/taiwanese_translator/'), // ✅ 確保正確對應 GitHub Pages
    routes: [
        { path: '/', component: () => import('../views/Home.vue') },
        { path: '/about', component: () => import('../views/About.vue') },
    ],
});

export default router;
