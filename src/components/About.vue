<template>
    <section id="resume">
        <v-container fluid pa-0>
            <v-row
                dense
                no-gutters>
                <v-col>
                    <v-img
                        :src="bgmain">

                        <v-row>
                            <v-flex
                                align="center"
                                justify="center"
                                align-self-center
                                xs12>
                                <p class="subtitle-1  white--text font-weight-medium text-center pt-7">
                                    {{heading1}}
                                </p>
                                <p class="display-2 white--text font-weight-bold text-center " style="letter-spacing: 5px;  word-spacing: 3px">
                                    {{heading2}}
                                </p>

                            </v-flex>
                        </v-row>

                        <v-row
                            class="xs6 md7 pa-5"
                            dense
                            no-gutters
                            style="padding-top: 150px;">
                            <v-col
                                    class="xs12 ">
                                <v-img
                                        :src="myimage"
                                        style="height: 55vh; !important; ;  width: 80vh;">
                                </v-img>
                            </v-col>

                            <v-col
                                class="text-left xs12 pa-md-6 pa-6">
                                <v-row>
                                    <v-flex class="green--text darken-3 headline font-weight-bold">
                                        <p>
                                            Who am i?
                                        </p>
                                        <p class="white--text ">
                                            {{me}}
                                        </p>

                                        <p class="white--text subtitle-1 font-weight-light  ">
                                            {{memore}}
                                        </p>

                                        <v-divider
                                                dark="true">

                                        </v-divider>
                                    </v-flex>
                                </v-row>

                                <v-row>
                                    <v-col
                                            class="pt-7">
                                        <v-flex class="white--text">
                                            <p class="subtitle-2 text-left">
                                                NAME:  <span class="font-weight-light">
                                                {{name}}
                                            </span>
                                            </p>
                                            <p class="subtitle-2 text-left">
                                                AGE:  <span class="font-weight-light">
                                                {{age}}
                                            </span>
                                            </p>

                                            <p class="subtitle-2 text-left">
                                                Phone No.:  <span class="font-weight-light">
                                                {{phn}}
                                            </span>
                                            </p>
                                        </v-flex>
                                    </v-col>

                                    <v-col
                                        class="pt-7">
                                        <v-flex class="white--text">
                                            <p class="subtitle-2 text-left">
                                                EMAIL:  <span class="font-weight-light green--text darken-3">
                                                {{email}}
                                            </span>
                                            </p>

                                            <p class="subtitle-2 text-left">
                                                From:  <span class="font-weight-light">
                                                {{from}}
                                            </span>
                                            </p>

                                            <p class="subtitle-2 text-left">
                                                College:  <span class="font-weight-light">
                                                {{college}}
                                            </span>
                                            </p>
                                        </v-flex>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                        <v-row  class="fill-height"
                                dense
                                no-gutters>
                            <v-col>
                                    <v-row
                                            dense
                                            no-gutters
                                            class="xs12">
                                        <v-col
                                                style=" padding-top: 25px"
                                                class=" text-center white--text">
                                            <p class="subtitle-1 font-weight-medium">
                                                {{title1resume}}
                                            </p>

                                            <p class="display-2 font-weight-bold " style="word-spacing: 1px">
                                                {{title2resume}}
                                            </p>
                                        </v-col>
                                    </v-row>

                                    <v-row
                                            style="padding-top: 100px;"
                                            class="xs4 md7">
                                        <v-col
                                                class="pa-md-6 pa-6">

                                            <v-card
                                                    class="mx-auto transparent"
                                                    :loading="true"
                                                    :elevation="9"
                                                    :dark="true"
                                                    hover="3dp"
                                                    raised="6dp"
                                                    :outlined="true"
                                                    max-width="400"
                                            >
                                                <v-img
                                                        class="white--text align-end"
                                                        height="200px"
                                                        :src="web"
                                                >
                                                </v-img>

                                                <v-card-subtitle class="title  pb-0 font-weight-bold green--text darken-3">
                                                    {{websub1}}
                                                </v-card-subtitle>

                                                <v-card-subtitle class="subtitle-1  pb-0 font-weight-light white--text">
                                                    {{websub2}}
                                                </v-card-subtitle>


                                            </v-card>


                                        </v-col>

                                        <v-col
                                                class="pa-md-6 pa-6">

                                            <v-card
                                                    class="mx-auto transparent "
                                                    :loading="true"
                                                    :elevation="9"
                                                    :dark="true"
                                                    hover="3dp"
                                                    raised="6dp"
                                                    :outlined="true"
                                                    max-width="400"
                                            >
                                                <v-img
                                                        class="white--text align-end"
                                                        height="200px"
                                                        :src="app"
                                                >
                                                </v-img>

                                                <v-card-subtitle class="title  pb-0 font-weight-bold green--text darken-3">
                                                    {{appsub1}}
                                                </v-card-subtitle>

                                                <v-card-subtitle class="subtitle-1  pb-0 font-weight-light white--text">
                                                    {{appsub2}}
                                                </v-card-subtitle>


                                            </v-card>


                                        </v-col>

                                        <v-col
                                                class="pa-md-6 pa-6">

                                            <v-card
                                                    class="mx-auto transparent "
                                                    :loading="true"
                                                    :elevation="9"
                                                    :dark="true"
                                                    hover="3dp"
                                                    raised="6dp"
                                                    :outlined="true"
                                                    max-width="400"
                                            >
                                                <v-img
                                                        class="white--text align-end"
                                                        height="200px"
                                                        :src="api"
                                                >
                                                </v-img>

                                                <v-card-subtitle class="title  pb-0 font-weight-bold green--text darken-3">
                                                    {{apisub1}}
                                                </v-card-subtitle>

                                                <v-card-subtitle class="subtitle-1  pb-0 font-weight-light white--text">
                                                    {{apisub2}}
                                                </v-card-subtitle>


                                            </v-card>


                                        </v-col>

                                    </v-row>

                                    <v-div>
                                        <v-flex
                                                class=" green--text darken-3 text-uppercase text-center"
                                                style="padding-top: 30px; padding-bottom: 40px"
                                                align="center"
                                                justify="justify">
                                            <p class="subtitle-1 font-weight-bold">
                                                " Let's Make something Special... "
                                            </p>
                                        </v-flex>
                                    </v-div>
                            </v-col>
                        </v-row>
                    </v-img>
                </v-col>
            </v-row>

            </v-container>
    </section>
</template>

<script>
    export default {
        name: "Resume",

        data: () => ({

            bgmain: require('@/assets/mainbg.jpg'),
            heading1: "Get to know me",
            heading2: "About me",
            name: "    Harish Bajiya",
            age:"   19",
            email:"   bajiyaharish20@gmail.com",
            from:"   Jaipur, RJ, India",
            phn:"   +91-8209117107",
            college:"  Army Institute of Technology, Pune",
            myimage: require('@/assets/myimage.jpg'),
            me: "I'm Harish Bajiya. You can call me Harry. I am Web Developer, Android Developer and Competitive Programmer. I'm an expert on Codeforces and 4* at codechef",
            memore:"I am a freelancer based in the Jaipur, RJ, India and i have the knowledge to building android apps and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.",
            title1resume : "Services i offer to my clients",
            bg : require('@/assets/mainbg.jpg'),
            web : require('@/assets/webd.jpg'),
            title2resume: "My Services",
            websub1 : "Web Development",
            websub2: "Count me in for any web type of web development. Be it frontend or backend. Just keep me away from Angular. I despise that. I have good knowledge of MEAN, LAMP and LEMP stack.",
            app : require('@/assets/appd.jpg'),
            appsub1 : "App Development",
            appsub2 : "I am primarily focused on iOS App Development using Swift. I love that language. I also have made a few apps in Java and Kotlin for the Android platform.",
            api : require('@/assets/api.jpg'),
            apisub1 : "REST APIs",
            apisub2 : "You very well know what an API is, right? Well I know how to build one. My goto choice is Flask but I speak Node too.",
        }),

    }
</script>

<style scoped>
    .theme--light.v-divider {
        border-color:darkgreen;
    }

</style>