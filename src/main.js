import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import Global from './components/Global.vue'

Vue.config.productionTip = false
//Vue.component('global', Global)


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')