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
import Watcher from '../src/pages/computed/_watcher.vue'
import HtmlClasses from '../src/pages/class-style-bindings/_html-classes.vue'
import InlineStyles from '../src/pages/class-style-bindings/_inline-styles.vue'
import VIf from '../src/pages/conditional-rendering/_v-if.vue'
import VShow from '../src/pages/conditional-rendering/_v-show.vue'
import VFor from '../src/pages/list-rendering/_v-for.vue'
import ListSort from '../src/pages/list-rendering/_list-sort.vue'
import ListenEvents from '../src/pages/event-handling/_listen-events.vue'
import EventModifiers from '../src/pages/event-handling/_event-modifiers.vue'
import KeyModifiers from '../src/pages/event-handling/_key-modifiers.vue'
import BasicUsage from '../src/pages/form-input-bindings/_basic-usage.vue'
import Modifiers from '../src/pages/form-input-bindings/_modifiers.vue'

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
        {
            path: '/watcher',
            component: Watcher
        },
        {
            path: '/html-classes',
            component: HtmlClasses
        },
        {
            path: '/inline-styles',
            component: InlineStyles
        },
        {
            path: '/v-if',
            component: VIf
        },
        {
            path: '/v-show',
            component: VShow
        },
        {
            path: '/v-for',
            component: VFor
        },
        {
            path: '/list-sort',
            component: ListSort
        },
        {
            path: '/listen-events',
            component: ListenEvents
        },
        {
            path: '/event-modifiers',
            component: EventModifiers
        },
        {
            path: '/key-modifiers',
            component: KeyModifiers
        },
        {
            path: '/basic-usage',
            component: BasicUsage
        },
        {
            path: '/modifiers',
            component: Modifiers
        },
        /*自动跳转路由*/ 
        {
            path: '/',
            redirect: '/home'
        }
    ]
})