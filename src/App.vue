<template>
  <v-app dark>
    <Drawer/>
    <v-content>
      <router-view/>
    </v-content>
    <BottomNavigation/>
  </v-app>
</template>

<script>

  export default {
    name: 'App',

    components: {
      Drawer: () => import('@/components/Drawer'),
      BottomNavigation: () => import('@/components/BottomNavigation')
    },
    data () {
      return {
      }
    },
  }
</script>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: white;
  }
  .vue-typer .custom.char.typed {
    color: white;
  }
  .vue-typer .custom.char.selected {
    background-color: transparent;
  }
  .vue-typer .custom.caret {
    width: 3px;
    background-color: white;
  }
  @media screen and (max-width: 960px) {
    #mainContent {
      padding-left: 0 !important;
    }
    #mainDrawer {
      display: none;
    }
  }
</style>