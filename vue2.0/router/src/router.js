import Vue from 'vue'
import Router from 'vue-router'
import BarView from './views/Bar.vue'
import FooView from './views/Foo.vue'
import UserView from './views/User.vue'
import UserPostsView from './views/UserPosts.vue'
import UserProfileView from './views/UserProfile.vue'
import UserHomeView from './views/UserHome.vue'
import RegisterView from './views/Register.vue'
import AgeView from './views/Age.vue'
import AgeHomeView from './views/AgeHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 普通路由
    { path: '/foo', component: BarView }
    ,{ path: '/bar', name: "bar", component: FooView }
    // 动态路径参数 以冒号开头
    ,{ path: '/user/:id',
       component: UserView,
       // 嵌套路由  
       children: [
        {
          // 匹配 /user/:id/profile
          path: 'profile',
          component: UserProfileView
        },
        {
          // 匹配 /user/:id/posts
          path: 'posts',
          component: UserPostsView
        },
        {
          // 匹配 /user/:id
          path: '',
          component: UserHomeView
        }
      ] 
    }
    // 命名路由
    ,{ 
      path: '/age/:id'
      ,name: 'age'
      ,component: AgeView 
      // 嵌套路由  
      ,children: [
        {
          // 匹配 /age/:id
          path: ''
          ,name: 'age.home'
          ,component: AgeHomeView
        }
      ]
    }
    // 命名视图
    ,{
      path: '/views'
      ,components: {
        default: BarView
        ,view_2: FooView
        ,view_3: UserView
      }
    }
    // 别名
    ,{
      path: '/register'
      ,component: RegisterView
      ,alias: '/register.alias'
    }
    // 重定向
    ,{ path: '/', redirect: '/foo' }
  ]
})
