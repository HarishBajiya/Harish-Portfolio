<template>
    <v-bottom-navigation
            :value="initialButton"
            dark
            fixed
            shift
            glow
            id="mobile-bottom-nav"
            class="hidden-md-and-up heading"
    >
        <v-btn
                v-for="item in navItems"
                :key="item.title"
                flat
                dark
                :to="item.link"
        >
            <span >{{ item.title }}</span>
            <v-icon >{{ item.icon }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    import navItems from "../router/Route-info";

    export default {
        name: 'BottomNavigation',

        data: () => ({
            initialButton: '/',
            navItems
        })
    }
</script>

<style scoped>

</style>