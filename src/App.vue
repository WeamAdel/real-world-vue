<template lang="html">
    <navbar-component></navbar-component>
    <flash-message></flash-message>
    <router-view />
</template>

<script lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import FlashMessage from './components/FlashMessage.vue';

export default {
    components: {
        'navbar-component': NavbarComponent,
        'flash-message': FlashMessage,
    },
};
</script>
<style src="./styles/app.scss" lang="scss"></style>
