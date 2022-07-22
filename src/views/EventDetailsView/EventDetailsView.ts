import EventsService from '@/services/events.service';
import { EventNotFoundError } from '@/errors/EventNotFoundError';

export default {
    name: 'event-details-view',
    components: {},
    props: ['id'],
    inject: ['GLOBAL_STORE'],
    data() {
        return {
            event: null,
            error: false,
            errorMessage: '',
        };
    },
    computed: {},
    async created() {
        //@ts-ignore
        this.error = false;
        //@ts-ignore
        this.errorMessage = '';

        try {
            //@ts-ignore
            const event = await EventsService.getApiEvent(this.id);
            //@ts-ignore
            this.event = event;
        } catch (err) {
            if (err instanceof EventNotFoundError) {
                //@ts-ignore
                this.$router.push({
                    name: 'resource-not-found',
                    //@ts-ignore
                    params: { resource: 'event' },
                });
            } else {
                //@ts-ignore
                this.error = true;
                //@ts-ignore
                this.errorMessage = err.message;
                //@ts-ignore
                this.GLOBAL_STORE.flashMessage = err.message;

                setTimeout(() => {
                    //@ts-ignore
                    this.GLOBAL_STORE.flashMessage = '';
                }, 2000);
            }
        }
    },
};
