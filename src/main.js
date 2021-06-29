import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate  from 'vuelidate'
import VueSimpleAlert from "vue-simple-alert";


Vue.use(Vuelidate);
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
