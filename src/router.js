import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjectsList from './pages/AppProjectsList.vue';
import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'project',
            component: AppProjectsList
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
    ]
});
export {router};