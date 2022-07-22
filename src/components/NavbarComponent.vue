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
                to="/events"
                active-class="navbar__link--active"
                >Events</router-link
            >
        </div>
    </nav>
</template>

<script lang="js">
export default  {
  name: 'navbar-component',
}
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
