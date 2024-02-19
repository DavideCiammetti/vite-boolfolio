import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjectsList from './pages/AppProjectsList.vue';
import AppAbout from './pages/AppAbout.vue';
import NotFound from './pages/NotFound.vue';
import AppProjectDetail from './pages/AppProjectDetail.vue';
import noProjectFound from './pages/noProjectFound.vue';

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
        {
            path: '/project/:slug',
            name: 'projectDetail',
            component: AppProjectDetail
        },
        {
            path: '/no-project-found',
            name: 'noProject',
            component: noProjectFound
        },
        { 
            path: '/:pathMatch(.*)*',
            name: 'NotFound', 
            component: NotFound 
        },
    ]
});
export {router};