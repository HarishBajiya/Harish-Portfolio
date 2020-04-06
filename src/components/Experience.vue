<template>
    <section id="experience">
        <v-container fluid
                     pa-0>
            <v-row dense
                   no-gutters
                   >
                <v-img :src="expbg">
                    <!-- Heading of my web page -->
                    <v-row dense
                           no-gutters
                           class="pa-5">
                        <v-flex class="text--center white--text">
                            <h1 class="heading font-weight-medium pa-8 text-xs-center">
                                Check out my Journey
                            </h1>
                            <!-- Subheading of my webpage-->
                            <h1 class="display-2 font-weight-bold pl-8 xs12">
                            Down the memory lane
                            </h1>
                        </v-flex>
                    </v-row>
                    <!-- Show the content of my Timeline-->
                    <v-row dense
                           no-gutters
                           class="pa-3">
                            <v-container
                                align="center">
                                <div>
                                    <v-timeline
                                            :dense="$vuetify.breakpoint.xsOnly"
                                            style="z-index: 1 !important;"
                                            dark="true">
                                        <v-timeline-item
                                                v-for="(item, i) in places"
                                                :key="i"
                                                color="green darken-3"
                                                large
                                        >
                                            <template v-slot:opposite>
                                                <span class="heading font-weight-medium white--text">{{ item.year }}</span>
                                            </template>
                                            <v-card class="pa-3 grey darken-3">
                                                <h3 class="headline green--text darken-3 font-weight-bold">{{ item.title }}</h3>
                                                <div class="white--text subtitle-1 font-weight-medium">
                                                    {{ item.desc }}
                                                </div>
                                            </v-card>
                                        </v-timeline-item>
                                    </v-timeline>
                                </div>
                            </v-container>
                    </v-row>


                </v-img>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "Experience",

        data: () => ({
            expbg: require('@/assets/mainbg.jpg'),
            alignTop: false,
            avatar: false,
            dense: false,
            fillDot: false,
            hideDot: false,
            icon: false,
            iconColor: false,
            left: false,
            reverse: false,
            right: false,
            small: false,

            places: [
                {"title": "HARRY's Portfolio", "desc": "I created my own Portfolio website using VUE JS framewrok. It is a fully responsive website.", "year": "2020"},
                {"title": "Hacker-Rank Rating", "desc": "I love Competitive Programming. I'm a 6-Star rating Coder in Hacker-Rank(Online Coding Platform) in C++ Programming language.", "year": "2020"},
                {"title": "Created a Bluetooth Robo Car", "desc": "In college in made a arduino operated wireless Robo car which can be used in Robo race competitions. Even I coded for line-tracer Robo Bots  I still do this as an hobby.", "year": "2019"},
                {"title": "Car Showroom Management using JAVA", "desc": "Created my first big Java project. It was a Car Showroom Management System detailing all the specified features of the cars and also for the sale the car to the customer. It was connected MySQL database and could be operated over network.", "year": "2018"}
            ],
        })
    }
</script>

<style scoped>

</style>