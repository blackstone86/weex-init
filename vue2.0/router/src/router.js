import Vue from 'vue'
import Router from 'vue-router'
import BarView from './views/Bar.vue'
import FooView from './views/Foo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/foo', component: BarView }
    ,{ path: '/bar', component: FooView }
    ,{ path: '/', redirect: '/foo' }
  ]
})
