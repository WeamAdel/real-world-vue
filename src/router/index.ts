import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView/index.vue';
import EventsView from '@/views/EventsView/index.vue';
import NotFoundView from '@/views/NotFoundView.vue';

// Dynamic import
const EventDetailsView = () => {
    return import('../views/EventDetailsView/index.vue');
};

import NProgress from 'nprogress';
import { beforeEventDetailsEnter } from './functions';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        props: false,
    },
    {
        path: '/events',
        name: 'events',
        component: EventsView,
        props: (router) => {
            const page = router.query.page;
            return { page: page ? +page : 1 };
        },
    },
    {
        path: '/events/:id',
        name: 'event-details',
        props: true,
        component: EventDetailsView,
        beforeEnter: beforeEventDetailsEnter,
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView,
    },
    {
        path: '/404/:resource',
        name: 'resource-not-found',
        component: NotFoundView,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(() => {
    NProgress.start();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
