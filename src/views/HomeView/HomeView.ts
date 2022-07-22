export default {
    name: 'home-view',
    methods: {
        goToEvents() {
            //@ts-ignore
            this.$router.push({
                name: 'events',
            });
        },
    },
};
