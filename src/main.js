import Vue from 'vue'
import App from './App.vue'
import Want from './components/Want.vue'

Vue.config.productionTip = false
Vue.component('Want',Want);
new Vue({
  render: h => h(App),
}).$mount('#app')
