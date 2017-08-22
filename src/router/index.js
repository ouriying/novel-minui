import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/index'
import Foo1 from '@/components/dao1'
import Foo2 from '@/components/dao2'
import Foo3 from '@/components/dao3'
import Foo4 from '@/components/dao4'
Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/', component: Home}
    { path: '/', redirect:'dao1' },
    // { path: '/index', component: Home },
    { path: '/dao1', component: Foo1 },
    { path: '/dao2', component: Foo2 },
    { path: '/dao3', component: Foo3 },
    { path: '/dao4', component: Foo4 },
  
  ]
})
