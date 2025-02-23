import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('../views/Home.vue') },
    { path: '/about', component: () => import('../views/About.vue') },
];

const router = createRouter({
    history: createWebHashHistory(), // ✅ 改成 Hash 模式，避免 GitHub Pages 404！
    routes,
});

export default router;
