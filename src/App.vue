<template lang="html">
    <navbar-component></navbar-component>
    <p
        role="alert"
        v-if="GLOBAL_STORE.flashMessage"
        style="
            position: fixed;
            right: var(--container-px);
            background-color: darkred;
            color: white;
            padding: 0.5rem 1rem;
        "
    >
        {{ GLOBAL_STORE.flashMessage }}
    </p>
    <router-view />
</template>

<script lang="js">
import NavbarComponent from "@/components/NavbarComponent";

export default {
    components: { 'navbar-component': NavbarComponent },
    inject: ['GLOBAL_STORE']
}
</script>
<style src="./styles/app.scss" lang="scss"></style>
