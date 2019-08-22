import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../router'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({  //配置对象的属性名都是一些确定的名称，不能随便修改
  render: h => h(App),
  router
}).$mount('#app')
