<template>
  <section id="home">
    <v-container fluid class="pa-0">
      <v-row dense no-gutters>
        <v-col>
          <v-img
                  :src="hero"
                  style="height: 100vh;">
            <v-row
                    align="center"
                    justify="center"
                    dense
                    no-gutters
                    class="pt-5">

                <!-- Name and what i am -->
              <v-col
                      class = " white--text "
                      style="padding-top: 30vh;!important;">
                <div xs12>
                  <p class="display-4 font-weight-bold text-center ">
                  <span style="letter-spacing: 2px; font-family: 'Arial Black'">
                  HARRY
                  </span>
                  </p>
                  <v-divider
                          dark="dark"
                  >
                    <!-- Typer for developer kind of stuff -->
                  </v-divider>
                  <p class="xs6 display-1 font-weight-medium word-spacing: 3px text-center green--text darken-3 pa-6" align="center" justify="center ">
                    I'm a
                    <vue-typer
                            :text ='["Freelancer","Developer","Coder","Tech Guy"]'
                            :repeat='Infinity'
                            :shuffle='false'
                            initial-action='typing'
                            :pre-type-delay='70'
                            :type-delay='70'
                            :pre-erase-delay='400'
                            :erase-delay='10'
                            :erase-style='backspace'
                            :erase-on-complete='false'
                            caret-animation='smooth'
                    ></vue-typer>
                  </p>
                </div>
              </v-col>
            </v-row>

            <!-- Social Icons -->
            <div class="mt-auto hidden-md-and-up" align="center" justify="end"
                  style="padding-top: 20vh;">
              <!-- Now for each item, we create a new icon -->
              <div class="my-4">
                <a v-for="item in socialIcons"
                   :key="item.name"
                   :href="item.link"
                   class="mx-2"
                   :title="item.name"
                   target="_blank"
                >
                  <v-icon color="white">{{ item.icon }}</v-icon>
                </a>
              </div>
            </div>

          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  import socialIcons from "../router/Icon-link";

  import {VueTyper} from 'vue-typer';
  export default {
    name: 'Home',

    data: () => ({

      hero: require('@/assets/hero.jpg'),
      socialIcons,

    }),

    components: {
      VueTyper
    }


  }

</script>

<style scoped>
  p#my-brand-name {
    position: absolute;
    top: 0;
  }

  a {
    text-decoration: none;
  }

</style>

