/*路由器对象模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../src/pages/instance/_create.vue'
import DataMethod from '../src/pages/instance/_data-method.vue'
import Home from '../src/pages/instance/_home.vue'
import Hooks from '../src/pages/instance/_hooks.vue'
import Interpolations from '../src/pages/template-syntax/_interpolations.vue'
import ShortHands from '../src/pages/template-syntax/_short-hands.vue'
import Directives from '../src/pages/template-syntax/_directives.vue'
import Example from '../src/pages/computed/_example.vue'

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
            path: '/hooks',
            component: Hooks
        },
        {
            path: '/interpolations',
            component: Interpolations
        },
        {
            path: '/short-hands',
            component: ShortHands
        },
        {
            path: '/directives',
            component: Directives
        },
        {
            path: '/example',
            component: Example
        },
        /*自动跳转路由*/ 
        {
            path: '/',
            redirect: '/home'
        }
    ]
})