import { EventNotFoundError } from '@/errors/EventNotFoundError';
import eventsService from '@/services/events.service';
import { GLOBAL_STORE } from '@/store';
import { RouteLocation } from 'vue-router';

export const beforeEventDetailsEnter = async function (to: RouteLocation) {
    GLOBAL_STORE.event = { data: null, errorMessage: '' };

    try {
        //@ts-ignore
        const event = await eventsService.getApiEvent(to.params.id);
        GLOBAL_STORE.event.data = event;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        if (err instanceof EventNotFoundError) {
            return {
                name: 'resource-not-found',
                params: { resource: 'event' },
            };
        } else {
            GLOBAL_STORE.event = {
                data: null,
                errorMessage: err.message,
            };
            GLOBAL_STORE.flashMessage = err.message;

            setTimeout(() => {
                GLOBAL_STORE.flashMessage = '';
            }, 2000);
        }
    }
};
