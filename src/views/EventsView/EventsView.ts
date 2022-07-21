import EventsList from '@/components/EventsList/index.vue';
import PagePagination from '@/components/PagePagination/index.vue';

import EventsService from '@/services/events.service';
import { PAGINATION_LIMIT } from '@/utilities/constants';
import { watchEffect } from 'vue';

export default {
    name: 'events-view',
    components: {
        'events-list': EventsList,
        'page-pagination': PagePagination,
    },
    props: { page: { type: Number } },
    data() {
        return {
            events: [],
            totalEventsCount: 0,
            pagesCount: 1,
            currentPage: 1,
            perPageLimit: PAGINATION_LIMIT,
        };
    },
    created: function () {
        watchEffect(async () => {
            //@ts-ignore
            const res = await EventsService.getApiEvents(this.page);

            if (res && res.events) {
                //@ts-ignore
                this.events = res.events;
                //@ts-ignore
                this.totalEventsCount = res.totalCount;
                //@ts-ignore
                this.pagesCount = this.getPagesCount();
            } else {
                alert('Failed to get events');
            }
        });
    },
    methods: {
        getPagesCount(): number {
            //@ts-ignore
            const length = this.events.length;

            return length ? Math.ceil(length / PAGINATION_LIMIT) : 1;
        },
    },
};
