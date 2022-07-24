import { EventNotFoundError } from '@/errors/EventNotFoundError';
import eventsService from '@/services/events.service';
import { RouteLocation } from 'vue-router';
import { store } from '@/store/index';

export const beforeEventDetailsEnter = async function (to: RouteLocation) {
    store.dispatch('setEventDetails', { data: null, errorMessage: '' });

    try {
        const event = await eventsService.getApiEvent(to.params.id as string);
        store.dispatch('setEventDetails', { data: event, errorMessage: '' });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        if (err instanceof EventNotFoundError) {
            return {
                name: 'resource-not-found',
                params: { resource: 'event' },
            };
        } else {
            store.dispatch('setEventDetails', {
                data: null,
                errorMessage: err.message,
            });
            store.dispatch('setFlashMessage', err.message);

            // setTimeout(() => {
            //     store.dispatch('setFlashMessage', '');
            // }, 2000);
        }
    }
};
