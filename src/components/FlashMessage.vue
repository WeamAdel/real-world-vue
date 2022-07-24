<template lang="html">
    <p class="flash-message" role="alert" v-if="flashMessage">
        {{ flashMessage }}
    </p>
</template>

<script lang="ts">
export default {
    name: 'flash-message',
    updated() {
        console.log(this.$store.state);
    },
    computed: {
        flashMessage() {
            return this.$store.state.flashMessage;
        },
    },
};
</script>

<style scoped lang="scss">
.flash-message {
    position: fixed;
    right: var(--container-px);
    background-color: darkred;
    color: white;
    padding: 0.5rem 1rem;
}
</style>
