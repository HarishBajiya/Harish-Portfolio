<template>
    <v-navigation-drawer fixed dark app id="mainDrawer">
        <v-layout
                align-center
                fill-height
                py-5
                justify-center
                column>

            <!-- The name typed logo -->
            <h2 class="display-3 font-weight-bold darken-3 green--text mb-2 pa-6">HB</h2>

            <!-- Developer name -->
            <div class="display-1 mb-2 white--text pa-4 font-weight-medium">Harish Bajiya</div>

            <!--  Designation -->
            <span class="title font-weight-light mb-5 white--text">Software Engineer</span>

            <!-- Buttons -->
            <div class="pt-6" v-for="item in navItems" :key="item.title">
                <v-btn elevation="1px" class="mb-3 text-capitalize subtitle-1 font-weight-medium transparent" flat :to="item.link">{{ item.title }}</v-btn>
            </div>

            <!-- Social Icons -->
            <div class="mt-auto">
                <!-- Now for each item, we create a new icon -->
                <div class="my-4">
                    <a v-for="item in socialIcons"
                       :key="item.name"
                       :href="item.link"
                       class="mx-2"
                       :title="item.name"
                       target="_blank"
                    >
                        <v-icon>{{ item.icon }}</v-icon>
                    </a>
                </div>
            </div>
        </v-layout>
    </v-navigation-drawer>

</template>

<script>
    import socialIcons from "../router/Icon-link";
    import navItems from "../router/Route-info";
    export default {
        name: "Drawer",
        data : () => ({
            navItems,
            socialIcons,
        })
    }
</script>

<style scoped>
    #mainDrawer {
        height: 100%;
        margin-top: 0px;
        max-height: calc(100% - 0px);
        transform: translateX(0px) !important;
        width:300px;
        background-color: rgb(24, 24, 24);
    }

    a {
        text-decoration: none;
    }


</style>