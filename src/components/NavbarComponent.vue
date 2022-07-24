<template lang="html">
    <nav class="navbar">
        <div class="container">
            <router-link
                class="navbar__link"
                to="/"
                active-class="navbar__link--active"
                >Home</router-link
            >
            |
            <router-link
                class="navbar__link"
                :to="{ name: 'events' }"
                active-class="navbar__link--active"
                >Events</router-link
            >
            |
            <router-link
                class="navbar__link"
                :to="{ name: 'create-event' }"
                active-class="navbar__link--active"
                >Create Event</router-link
            >
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'navbar-component',
};
</script>

<style scoped lang="scss">
.navbar__link {
    &:visited {
        color: var(--black-900);
    }
}

.navbar__link--active {
    color: blue;

    &:visited {
        color: blue;
    }
}
</style>
