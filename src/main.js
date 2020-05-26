import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'
import Toasted from 'vue-toasted'
import AppSocket from './plugins/socket'
import filters from './filters'
import Paginate from 'vuejs-paginate'

import AppDropdown from './components/shared/AppDropdown'
import AppHero from './components/shared/AppHero'
import AppSpinner from './components/shared/AppSpinner'


Vue.config.productionTip = false

Vue.component('AppHero', AppHero)
Vue.component('AppDropdown', AppDropdown)
Vue.component('AppSpinner', AppSpinner)
Vue.component('paginate', Paginate)

filters()

Vue.use(vuelidate)
Vue.use(Toasted)
Vue.use(AppSocket, { connection: process.env.VUE_APP_URI })

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')