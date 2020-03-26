import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import index from './index'


Vue.use(MintUI)
Vue.use(index)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


