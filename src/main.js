import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'
import { store } from './store.js'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://test-project-248a2.firebaseio.com';

newFunction();

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

function newFunction() {
  Vue.use(Vuetify);
  Vue.use(VueRouter);
}

