<template>
    <section id="resume">
        <v-container fluid
                     class="pa-0">
            <v-row
                dense
                no-gutters>
                <v-img
                    :src="bgresume">

                    <!-- Heading Section of the Web Page -->

                    <v-row
                        no-gutters
                        dense
                        class="xs12 pa-12">
                        <v-flex
                                align="center"
                                class="white--text text-center">
                            <p class="subtitle-1 font-weight-medium">
                                {{heading1}}
                            </p>

                            <p class="display-2 font-weight-bold">
                                {{heading2}}
                            </p>
                        </v-flex>
                    </v-row>
                        <!-- Section-2, Education and skills -->
                    <v-row
                        dense
                        no-gutters xs6 pa-12>
                            <!-- Education Section -->
                        <v-col
                            style=" padding-top: 50px;"
                            class="pa-xs-5 xs12 pa-12">
                            <v-flex
                                    xs12
                                    md3
                                    style="max-width: 400px">
                                <h3 class="display-1 font-weight-bold mb-4 white--text">
                                    My Education
                                </h3>

                                <v-sheet
                                        v-for="(edu, i) in educations"
                                        :key=i
                                        class="mb-5 transparent pt-7">
                                    <v-layout>
                                        <v-sheet
                                                class="mr-3"
                                                color="green darken-3"
                                                height=120
                                                width=2>
                                        </v-sheet>

                                        <v-flex style="pt-5">
                                            <div class="mb-3 white--text font-weight-bold">{{ edu.name }}</div>
                                            <div class="text-xs-right text-right">
                                                <span class="title green--text darken-3 font-weight-medium">
                                                    {{ edu.stream }}
                                                </span>
                                                <footer class="font-weight-light white--text">
                                                    <div>{{ edu.alt }}</div>
                                                    <div>{{ edu.duration }}</div>
                                                </footer>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-sheet>
                            </v-flex>

                        </v-col>
                        <!-- Skills Section -->
                        <v-col
                            style=" padding-top: 50px;"
                            class="xs12 pa-xs-5 pa-4 text-center">

                            <v-flex
                                    xs12
                                    md4
                                    style="max-width: 500px">
                                <h3 class="display-1 font-weight-bold mb-4 white--text">
                                    My Skills
                                </h3>
                                <div
                                        class="mb-4"
                                        v-for="(skill, i) in skills"
                                        :key=i>
                                    <h4 class="text-uppercase mb-3 white--text">{{ skill.skillName }}</h4>
                                    <div class="pa-1">
                                        <v-layout class="pb-5"
                                                align-center
                                                v-for="(currSkill, i) in skill.skillSets"
                                                :key=i
                                                mb-2>
                                            <v-flex xs5>
                                                <h5 class="subtitle-1 white--text pa-1">
                                                    {{ currSkill.name }}
                                                </h5>
                                            </v-flex>
                                            <v-flex xs7>
                                                <v-rating
                                                        dense
                                                        readonly
                                                        color="green darken-3"
                                                        background-color="green darken-3"
                                                        :full-icon="fullIcon"
                                                        :empty-icon="emptyIcon"
                                                        :value=currSkill.exp>
                                                </v-rating>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </div>
                            </v-flex>

                        </v-col>

                    </v-row>

                </v-img>

            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "resume",

        data:() => ({
            heading1: "Check out my Education & My Skills",
            bgresume: require('@/assets/mainbg.jpg'),
            heading2: "Education & My Skills",
            educations: [
                {"name": "Kendriya Vidhayalaya, NDA, Pune", "alt": "General Subjects", "stream": "Primary Schooling", "duration": "0000-0000"},
                {"name": "Army Public School, Jaipur", "alt": "Physcis, Chem & Maths", "stream": "Senior Secondary", "duration": "2013-2018"},
                {"name": "Army Public Institute of Technology, Pune", "alt": "Computer Sciences", "stream": "Information Technolgy", "duration": "2019-Present"},
            ],

            skills: [
                {"skillName": "Programming", "skillSets": [
                        {"name": "Kotlin", "exp": 4},
                        {"name": "Java", "exp": 4},
                        {"name": "Python", "exp": 4},
                        {"name": "C & C++", "exp": 5},
                    ]},
                {"skillName": "Others", "skillSets": [
                        {"name": "Wordpress", "exp": 4},
                        {"name": "LEMP Stack", "exp": 4},
                        {"name": "Arduino", "exp": 5},
                    ]},
                {"skillName": "Web Development", "skillSets": [
                        {"name": "Vue JS", "exp": 4},
                        {"name": "HTML 5", "exp": 5},
                        {"name": "SASS & CSS", "exp": 5},
                        {"name": "Node JS", "exp": 3},
                    ]},
            ],

        }),
    }

</script>

<style scoped>

</style>