import axios from "axios";
import {ApiEndPoint} from "@/enums/ApiEndpoint";

class EventsService {
    async getApiEvents() {
        return axios.get(ApiEndPoint.ALL_EVENTS).then(res => {
            return res.data
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new EventsService();