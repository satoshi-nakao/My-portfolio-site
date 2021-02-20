import Vue from 'vue'
import App from './App.vue'
import Want from './components/Want.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false
Vue.component('Want',Want);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
