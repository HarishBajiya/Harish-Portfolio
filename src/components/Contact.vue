<template>
    <section id="contact">
        <v-container fluid
                     class="pa-0">
            <v-row dense
                   no-gutters>
                <v-img :src="contactbg"
                max-height="2000px">
                    <!--  Heading section of the Web page-->
                        <v-row
                                style="padding-top: 45px">
                            <v-flex class="text-left white--text ">
                                <h1 class=" pl-12 subtitle-1 font-weight-medium">
                                    {{contacthead1}}
                                </h1>
                                <h2 class="pl-12 text-left display-2 font-weight-bold">
                                    {{contacthead2}}
                                </h2>
                            </v-flex>

                        </v-row>
                    <!-- Section in which user will enter its details-->
                    <v-row >
                        <v-col class="pa-12" cols="12" md="6" xs="12">
                            <v-flex class="text-left white--text pa-7">
                                <h1 class="display-1 font-weight-bold">
                                    Message me
                                </h1>
                            </v-flex>

                            <v-form class="md5 mb-4 xs12"
                                    ref="form"
                                    method="post"
                                    lazy-validation
                                    v-model="formIsValid"
                                    autocomplete="off"
                                    autofill="off"
                                    style="max-width: 75vh;">
                                    <v-flex class="xs12">
                                        <!-- first Text Field for Name -->
                                        <v-text-field
                                                label="Name"
                                                background-color="grey darken-2"
                                                solo-inverted
                                                flat
                                                v-model="name"
                                                :rules="nonEmptyRule"
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                <!-- Second Text Field for Email -->
                                    <v-flex class="xs12">
                                        <v-text-field
                                                label="Email"
                                                background-color="grey darken-2"
                                                flat
                                                solo-inverted
                                                v-model="email"
                                                :rules="emailRules"
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                <!-- third Text Field for Message -->
                                    <v-flex class="xs12">
                                        <v-text-field
                                                label="Subject"
                                                background-color="grey darken-2"
                                                v-model="subject"
                                                :rules="nonEmptyRule"
                                                flat
                                                solo-inverted
                                                required

                                        ></v-text-field>
                                    </v-flex>
                                <!-- last Text Field for Message -->

                                    <v-flex class="xs12">
                                        <v-textarea
                                                solo-inverted
                                                background-color="grey darken-2"
                                                flat
                                                :rules="nonEmptyRule"
                                                v-model="message"
                                                label="Message"
                                                required
                                        ></v-textarea>
                                    </v-flex>

                                    <v-flex class="xs12" :class="{ 'mb-2': successAlert }">
                                        <v-alert
                                                :value="successAlert"
                                                type="success">
                                            Message Sent.
                                        </v-alert>
                                    </v-flex>

                                    <v-flex class="xs12" :class="{ 'mb-2': infoAlert }">
                                        <v-alert
                                                :value="infoAlert"
                                                type="info">
                                            Sending....
                                        </v-alert>
                                    </v-flex>

                                    <v-flex class="xs12" :class="{ 'mb-2': errorAlert }">
                                        <v-alert
                                                :value="errorAlert"
                                                type="error">
                                            Unable to send the message.
                                        </v-alert>
                                    </v-flex>

                                    <v-flex text-xs-right>
                                        <v-btn
                                                color="green darken-3"
                                                type="submit"
                                                ref="submitBtn"
                                                @click.native="sendEmail($event)"
                                                :disabled="!formIsValid">
                                            <span class="white--text"> Send </span><v-icon color="white" class="ml-2">mdi-send</v-icon>
                                        </v-btn>
                                    </v-flex>
                            </v-form>

                        </v-col>

                        <v-col  class="pl-8 pt-xl-7 text--left" cols="12" md="6"  xs="12">
                            <v-flex
                                    class="xs12 md-3 pt-lg-12 justify-space-between">
                                <h2 class="white--text display-1 text-left font-weight-bold green--text darken-3">Social Contacts</h2>

                                <!-- Social contacts -->
                                <div class="my-4 pa-5  xs12">
                                    <a class="mx-2"
                                       v-for="(icon, i) in socialIcons"
                                       :title="icon.name"
                                       :key=i
                                       target="_blank"
                                       :href="icon.link">
                                        <v-icon color="white">{{ icon.icon }}</v-icon>
                                    </a>
                                </div>

                                <!--  MY Details -->
                                <v-list class="transparent xs12 pb-5" three-line>
                                    <v-list-tile
                                            avatar
                                            v-for="(det, i) in contactDetails"
                                            :key=i>
                                        <v-list-tile-avatar>
                                            <v-icon
                                                    color="green darken-3"
                                                    class="mr-5"
                                                    style="font-size: 48px;"
                                            >{{ det.icon }}</v-icon>
                                        </v-list-tile-avatar>

                                        <v-list-tile-content class="white--text font-weight-medium">
                                            <v-list-tile-title class="mr-2">{{ det.title }}</v-list-tile-title>

                                            <v-list-tile-sub-title>
                                                {{ det.val }}
                                            </v-list-tile-sub-title>
                                        </v-list-tile-content>

                                        <v-divider class="transparent pa-3">

                                        </v-divider>
                                    </v-list-tile>
                                </v-list>
                            </v-flex>
                        </v-col>
                    </v-row>
                </v-img>
            </v-row>
        </v-container>
    </section>
</template>

<script>

    import $ from 'jquery'
    import socialIcons from "../router/Icon-link";

    export default {
        name: "contact",

        data: () => ({
            contactbg: require('@/assets/mainbg.jpg'),
            contacthead1: "Feel free to contact me anytimes",
            contacthead2: "Get in Touch",

            socialIcons,

// Form model directives
            formIsValid: true,
            name: "",
            email: "",
            subject: "",
            message: "",

// Alert visibility directives
            successAlert: false,
            infoAlert: false,
            errorAlert: false,

            nonEmptyRule: [
                v => !!v || "This field can't be empty"
            ],

            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],

            contactDetails: [
                {"title": "Address :", "val": "Jaipur, RJ, India", "icon": "mdi-map-marker"},
                {"title": "Phone :", "val": "+91-8209117107", "icon": "mdi-phone"},
                {"title": "Email :", "val": "bajiyaharish20@gamil.com", "icon": "mdi-email"}
            ],
        }),

        methods: {
            sendEmail: function (event) {
                // Prevent the form's default behavior
                event.preventDefault();

                // Validate the form, if errors, exit right away
                if (!this.$refs.form.validate()) {
                    return;
                }

                // Else we now get the values from the model objects
                const name = this.name;
                const email = this.email;
                const subject = this.subject;
                const message = this.message;

                var instance = this;

                // Hey jQuery! Here I come
                $.ajax({
                    url: "https://portfolio.nicksuniversum.com/nmail.php",

                    data: {
                        "name": name,
                        "email": email,
                        "subject": subject,
                        "message": message
                    },

                    type: "post",

                    beforeSend: function() {
                        instance.infoAlert = true;
                        instance.formIsValid = false;
                    },

                    success: function(response) {
                        instance.infoAlert = false;
                        if (response == "Success") {
                            instance.successAlert = true;
                        }
                        else {
                            instance.errorAlert = true;
                        }

                        // Reset
                        setTimeout(function() {
                            instance.successAlert = false;
                            instance.errorAlert = false;
                            instance.$refs.form.reset();
                            instance.formIsValid = true;
                        }, 3000);
                    },

                    error: function() {
                        instance.infoAlert = false;
                        instance.errorAlert = true;

                        // Reset
                        setTimeout(function() {
                            instance.successAlert = false;
                            instance.errorAlert = false;
                            instance.$refs.form.reset();
                            instance.formIsValid = true;
                        }, 3000);
                    }
                });
            }
        }
    }
</script>

<style scoped>

    a {
        text-decoration: none;
    }
</style>