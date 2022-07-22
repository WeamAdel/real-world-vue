<template lang="html">
    <section class="not-found-view">
        <h1>The {{ resource }} was not found!</h1>
        <router-link to="/">Go back to home page</router-link>
    </section>
</template>

<script lang="ts">
export default {
    name: 'not-found-view',
    props: {
        resource: {
            type: String,
            default: 'page',
        },
    },
    data() {
        return {};
    },
    methods: {},
    computed: {},
};
</script>

<style scoped lang="scss"></style>
