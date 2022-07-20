import EventsService from "@/services/events.service";

export default {
    name: "events-list",
    components: {},
    props: [],
    data() {
        return {
            events: null,
        };
    },
    computed: {},
    mounted: async function() {
        console.log("mounted");
        const events = await EventsService.getApiEvents();

        if(events) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            this.events = events;
        }
    },
    methods: {},
};
