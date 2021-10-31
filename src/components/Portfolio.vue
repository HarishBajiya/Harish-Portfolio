<template>
    <section id="portfolio">
        <v-container fluid
                     class="pa-0">
            <v-row
                dense
                no-gutters>
                <v-img
                    :src="bgport">
                        <v-row
                            dense
                            no-gutters
                            style="padding-top: 45px">
                            <v-flex
                                class="white--text text-center"
                                align="center">
                                <p class=" subtitle-1 font-weight-medium">
                                    {{portheading1}}
                                </p>
                                <p class=" display-2 font-weight-bold">
                                    {{portheading2}}
                                </p>
                            </v-flex>
                        </v-row>
                        <v-row
                            dense
                            no-gutters
                            style="padding-top: 30px;">
                            <v-carousel
                                    class="elevation-0"
                                    height=700
                                    hide-controls
                                    :interval="5000"
                                    :cycle="true">
                                <v-carousel-item
                                        v-for="(item,i) in items"
                                        :key="i"
                                >
                                    <v-sheet
                                            class="transparent pa-3"
                                            height=100%>
                                        <!-- The caoursel content is contained in the sheet -->
                                        <div class="text-xs-center text-center mb-5">
                                            <h2 class="green--text darken-3 display-1 font-weight-bold mb-1">{{ item.title }}</h2>
                                            <span class="headline white--text font-weight-medium">{{ item.subtitle }}</span>
                                        </div>

                                        <!-- The description of the current project -->
                                        <v-layout xs6
                                                wrap
                                            style="padding-top: 20px;"
                                            class="pa-xl-2 pa-2">
                                            <!-- Flex 1 -->
                                            <v-flex shrink
                                                style="padding-top: 20px"
                                                class="pa-10">
                                                <div class="mb-3" style="max-width: 500px;">
                                                    <!-- Details -->
                                                    <h2 class="green--text darken-3 title font-weight-bold mb-3">Project Details</h2>

                                                    <div class="subheading mb-5 white--text">
                                                        {{ item.desc }}
                                                    </div>

                                                    <!-- Info -->
                                                    <h2 class="green--text darken-3 title font-weight-bold">Project Info</h2>
                                                    <v-list class="transparent pa-3">
                                                        <v-list-tile>
                                                            <v-list-tile-action>
                                                                <v-icon style="padding-right: 40px">mdi-code-tags</v-icon>
                                                            </v-list-tile-action>
                                                            <v-list-tile-title class="mr-2"> {{ item.lang }}</v-list-tile-title>
                                                        </v-list-tile>
                                                        <v-divider
                                                        class="transparent pa-2">

                                                        </v-divider>
                                                        <v-list-tile>
                                                            <v-list-tile-action>
                                                                <v-icon style="padding-right: 40px">mdi-github</v-icon>
                                                            </v-list-tile-action>
                                                            <v-list-tile-title class="mr-2">
                                                                <a :href="item.source" class="white--text" target="_blank" > External Link <v-icon style="padding-left: 5px">mdi-link-variant</v-icon></a>
                                                            </v-list-tile-title>
                                                        </v-list-tile>

                                                        <v-divider
                                                                class="transparent pa-2">

                                                        </v-divider>

                                                        <v-list-tile>
                                                            <v-list-tile-action>
                                                                <v-icon style="padding-right: 40px">mdi-calendar</v-icon>
                                                            </v-list-tile-action>
                                                            <v-list-tile-title class="mr-2">{{ item.year }}</v-list-tile-title>
                                                        </v-list-tile>
                                                    </v-list>
                                                </div>
                                            </v-flex>

                                            <!-- The flex that will be hidden on small and down -->
                                            <v-flex hidden-sm-and-down
                                            >
                                                <v-img
                                                        height=400
                                                        width=500
                                                        :aspect-ratio="1920/1080"
                                                        contain
                                                        :src="item.img"
                                                        class="mx-auto"></v-img>
                                            </v-flex>
                                        </v-layout>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </v-row>

                </v-img>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "Portfolio",

        data: () => ({
            bgport: require('@/assets/mainbg.jpg'),
            portheading1: "Showcasing some of my work",
            portheading2: "Portfolio",
            items: [
                {
                    title: "HARRY's Portfolio",
                    subtitle: "This portfolio website",
                    desc: "A personal protfolio for as my first web development project.",
                    lang: "Vue JS",
                    source: "https://github.com/HarishBajiya/Car-Showroom",
                    year: "2020",
                    img: require('@/assets/portfolio.jpg')
                },
                {
                    title: "Car Showroom Project",
                    subtitle: "Car Management Project",
                    desc: "As a young programmer student me and one of my created this CAR SHOWROOM MANAGEMENT java based project as our assignment. It includes a MySQL database in which the all the data of the customer is stored and updated as and when needed.",
                    lang: "Java",
                    source: "https://github.com/HarishBajiya/Harish-Portfolio",
                    year: "2018",
                    img: require('@/assets/carshowroom.png')
                },
                {
                    title: "ShatRanj - AI",
                    subtitle: "A chess Game.",
                    desc: "A chess engine written in JavaScript. AI uses Min‐Max Algorithm in Game Decision Tree with Alpha‐Beta pruning for time optimization. Used Piece‐Square Tables for the board evaluation at each step.",
                    lang: "JavaScript",
                    source: "https://github.com/HarishBajiya/Shatranj-AI-Chess",
                    year: "2021",
                    img: require('@/assets/Chess.png')
                },
        ],

        })
    }
</script>

<style scoped>

    a {
        text-decoration: none;
    }

</style>