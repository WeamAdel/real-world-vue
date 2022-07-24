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
import eventsService from '@/services/events.service';
import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'create-event-view',
    props: [],
    data() {
        return {
            event: {
                id: '',
                name: '',
                location: '',
                image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
        };
    },
    methods: {
        async createEvent() {
            const newEvent = { ...this.event, id: uuidv4() };

            try {
                await eventsService.doApiCreteEvent(newEvent);
                this.$store.dispatch(
                    'setFlashMessage',
                    'Event added successfully'
                );
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                this.$store.dispatch('setFlashMessage', err.message);
            }
        },
    },
    computed: {},
};
</script>

<style scoped lang="scss"></style>
