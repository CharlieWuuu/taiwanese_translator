import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { registerSW } from 'virtual:pwa-register';
import App from './App.vue';
import './styles/main.scss';
import axios from 'axios';

registerSW(); // 註冊 PWA Service Worker

const pinia = createPinia();
const routes = [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/about', component: () => import('./views/About.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');
