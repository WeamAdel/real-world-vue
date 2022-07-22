import EventsList from '@/components/EventsList/index.vue';
import PagePagination from '@/components/PagePagination/index.vue';

import EventsService from '@/services/events.service';
import { PAGINATION_LIMIT } from '@/utilities/constants';

import { ComponentPublicInstance } from 'vue';
import { NavigationGuardNext, RouteLocation } from 'vue-router';

interface Data {
    events: [];
    totalEventsCount: number;
    pagesCount: number;
    currentPage: number;
    perPageLimit: number;
}

export default {
    name: 'events-view',
    components: {
        'events-list': EventsList,
        'page-pagination': PagePagination,
    },
    props: { page: { type: Number } },
    data(): Data {
        return {
            events: [],
            totalEventsCount: 0,
            pagesCount: 1,
            currentPage: 1,
            perPageLimit: PAGINATION_LIMIT,
        };
    },
    async beforeRouteEnter(
        to: RouteLocation,
        from: RouteLocation,
        next: NavigationGuardNext
    ) {
        const res = await EventsService.getApiEvents(+(to.query.page || 1));

        if (res && res.events) {
            next((comp: ComponentPublicInstance) => {
                //@ts-ignore
                comp.events = res.events;
                //@ts-ignore
                comp.totalEventsCount = res.totalCount;
                //@ts-ignore
                comp.pagesCount = comp.getPagesCount();
            });
        } else {
            alert('Failed to get events');
        }
    },
    async beforeRouteUpdate(
        to: RouteLocation,
        from: RouteLocation,
        next: NavigationGuardNext
    ) {
        const res = await EventsService.getApiEvents(+(to.query.page || 1));

        if (res && res.events) {
            this.events = res.events;
            this.totalEventsCount = res.totalCount;
            this.pagesCount = this.getPagesCount();
        } else {
            alert('Failed to get events');
        }

        next(true);
    },
    methods: {
        getPagesCount(): number {
            const length = this.events.length;

            return length ? Math.ceil(length / PAGINATION_LIMIT) : 1;
        },
    },
};
