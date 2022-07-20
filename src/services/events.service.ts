import axios from "@/axios"
import {ApiEndPoint} from "@/enums/ApiEndpoint";

class EventsService {
    async getApiEvents() {
        return axios.get(ApiEndPoint.ALL_EVENTS).then(res => {
            return res.data
        }).catch((err: Error) => {
            console.log(err.message)
        })
    }
}

export default new EventsService();