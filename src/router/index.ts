import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView/index.vue';
import EventsView from '@/views/EventsView/index.vue';

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
        component: () => {
            return import('../views/EventDetailsView/index.vue');
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
