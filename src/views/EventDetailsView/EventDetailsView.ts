export default {
    name: 'event-details-view',
    components: {},
    props: ['id'],
    created() {
        console.log(this.$store.state);
    },
    data() {
        return {
            event: this.$store.state.eventDetails.data,
            errorMessage: this.$store.state.eventDetails.errorMessage,
        };
    },
};
