import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from './index'

Vue.use(ElementUI);
Vue.use(index);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
