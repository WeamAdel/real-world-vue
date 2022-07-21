import axios from "@/axios"
import {ApiEndPoint} from "@/enums/ApiEndpoint";

class EventsService {
    /**
     * Gets all the events.
     */
    async getApiEvents() {
        return axios.get(ApiEndPoint.ALL_EVENTS).then(res => {
            return res.data
        }).catch((err: Error) => {
            console.log(err.message)
        })
    }

    /**
     * Gets the event with the passed id.
     * 
     * @param id Event id
     */
    async getApiEvent(id: string) {
        return axios.get(`${ApiEndPoint.ALL_EVENTS}/${id}`).then(res => {
            return res.data
        }).catch((err: Error) => {
            console.log(err.message)
        })
    }
}

export default new EventsService();