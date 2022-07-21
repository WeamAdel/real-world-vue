import EventsService from '@/services/events.service';

export default {
    name: 'event-details-view',
    components: {},
    props: ['id'],
    data() {
        return {
            event: null,
        };
    },
    computed: {},
    async created() {
        const event = await EventsService.getApiEvent(this.id);

        if (event) {
            this.event = event;
        }
    },
};
