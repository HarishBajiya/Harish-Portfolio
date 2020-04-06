import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
