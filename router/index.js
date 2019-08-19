/*路由器对象模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../src/pages/instance/_create.vue'
import DataMethod from '../src/pages/instance/_data-method.vue'
import Home from '../src/pages/instance/_home.vue'

//声名使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/create',
            component: Create
        },
        {
            path: '/data-method',
            component: DataMethod
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})