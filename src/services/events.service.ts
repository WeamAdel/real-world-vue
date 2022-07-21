import axios from '@/axios';
import { ApiEndPoint } from '@/enums/ApiEndpoint';
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
            .catch((err: Error) => {
                console.log(err.message);
            });
    }
}

export default new EventsService();
