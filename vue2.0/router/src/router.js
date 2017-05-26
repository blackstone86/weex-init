import Vue from 'vue'
import Router from 'vue-router'
import BarView from './views/Bar.vue'
import FooView from './views/Foo.vue'
import UserView from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 普通路由
    { path: '/foo', component: BarView }
    ,{ path: '/bar', component: FooView }
    // 动态路径参数 以冒号开头
    ,{ path: '/user/:id', component: UserView }
    // 命名路由
    ,{ path: '/user/:id', name: 'user', component: UserView }
    // 重定向
    ,{ path: '/', redirect: '/foo' }
  ]
})
