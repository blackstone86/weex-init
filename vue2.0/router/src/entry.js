import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue(Vue.util.extend({ 
    el: '#root'
    ,router
}, App))

router.push('/')
// router.push('/foo')
// router.push('/user/1')
// router.push({ name: 'user', params: { id: 1 }})

