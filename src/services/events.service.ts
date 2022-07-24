import axios from '@/api/axios';
import axiosLocal from '@/api/axios-local';

import { ApiEndPoint } from '@/enums/ApiEndpoint';
import { EventApiError } from '@/errors/EventApiError';
import { EventNotFoundError } from '@/errors/EventNotFoundError';
import { store } from '@/store';
import { PAGINATION_LIMIT } from '@/utilities/constants';

interface EventResponse {
    events: [object];
    totalCount: number;
}

class EventsService {
    /**
     * Gets all the events.
     */
    async getApiEvents(
        currentPage?: number
    ): Promise<EventResponse | undefined> {
        let params = '';

        if (currentPage) {
            params = `?_limit=${PAGINATION_LIMIT}&_page=${currentPage}`;
        }

        return axios
            .get(ApiEndPoint.ALL_EVENTS + params)
            .then((res) => {
                return {
                    events: res.data,
                    totalCount: +res.headers['x-total-count'],
                };
            })
            .catch((err: Error) => {
                console.log(err.message);
                return undefined;
            });
    }

    /**
     * Gets the event with the passed id.
     *
     * @param id Event id
     */
    async getApiEvent(id: string) {
        return axios
            .get(`${ApiEndPoint.ALL_EVENTS}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch(({ response: { status }, message }) => {
                if (status === 404) {
                    throw new EventNotFoundError(message);
                } else {
                    throw new EventApiError(message);
                }
            });
    }

    /**
     * Creates a new event.
     *
     * @param event Event to be created.
     */
    async doApiCreteEvent(event: object) {
        return await axiosLocal
            .post('/events', event)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });
    }
}

export default new EventsService();
