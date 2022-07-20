export default {
    name: "events-list",
    components: {},
    props: [],
    data() {
        return {
            events: [
                {
                    id: "e-1",
                    name: "Event 1",
                    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
                    location: "Cairo, Egypt",
                },
                {
                    id: "e-2",
                    name: "Event 2",
                    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    location: "Alexandria, Egypt",
                },
                {
                    id: "e-3",
                    name: "Event 3",
                    image: "https://images.unsplash.com/photo-1520608421741-68228b76b6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    location: "London, UK",
                },
                {
                    id: "e-4",
                    name: "Event 4",
                    image: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                    location: "Paris, France",
                },
                {
                    id: "e-5",
                    name: "Event 5",
                    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    location: "Berlin, Germany",
                },
            ],
        };
    },
    computed: {},
    mounted() {
        console.log("mounted");
    },
    methods: {},
};
