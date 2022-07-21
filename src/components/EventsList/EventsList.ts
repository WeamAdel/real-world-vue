import EventsService from "@/services/events.service";

export default {
    name: "events-list",
    components: {},
    props: [],
    data(): {events: null | []} {
        return {
            events: null,
        };
    },
    computed: {},
    created: async function() {
        const events = await EventsService.getApiEvents();

        if(events) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            this.events = events;
        }
    },
    methods: {},
};
