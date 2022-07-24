<template lang="html">
    <div class="container">
        <h1>create-event-view Component</h1>
        <form class="form" @submit.prevent="createEvent">
            <!-- Name -->
            <div class="form__input-field">
                <label for="name">Event Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Event name"
                    v-model="event.name"
                />
            </div>

            <!-- Location -->
            <div class="form__input-field">
                <label for="location">Event Location</label>
                <input
                    type="text"
                    id="location"
                    placeholder="Event location"
                    v-model="event.location"
                />
            </div>

            <button type="submit">Add Event</button>
        </form>
    </div>
</template>

<script lang="ts">
export default {
    name: 'create-event-view',
    props: [],
    data() {
        return { event: { name: '', location: '' } };
    },
    methods: {
        createEvent() {
            console.log(this.event);
        },
    },
    computed: {},
};
</script>

<style scoped lang="scss">
.create-event-view {
}
</style>
