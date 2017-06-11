<template>
    <div id="app">
        <h1>Hello App! {{text}}</h1>
        <ul>
            <li><router-link to="/foo">Go to Foo</router-link></li>
            <li><router-link to="/bar">Go to Bar</router-link></li>
            <li><router-link to="/user/1">Go to User 1</router-link></li>
            <li><router-link to="/user/1/profile">Go to User 1 profile</router-link></li>
            <li><router-link to="/user/1/posts">Go to User 1 posts</router-link></li>
            <li><router-link :to="{ name: 'age.home', params: { id: 2 }}">Go to Age 2 home</router-link></li>
            <li><router-link to="/age/2">Go to Age 2 home</router-link></li>
            <li><router-link to="/views">Go to Views</router-link></li>
            <li><router-link :to="{ path: '/register', query: { plan: 'private' }}">Go register private</router-link></li>
            <li><router-link :to="{ path: '/register', query: { plan: 'private' }}" replace>Go register private replace router</router-link></li>
            <li><button @click="toFoo">Go to Foo</button></li>
            <li><button @click="toBar">Go to Bar</button></li>
            <li><button @click="toAge2">Go to Age 2 home</button></li>
            <li><button @click="toRegister">Go register private</button></li>
            <li><button @click="toRegister_replace_router">Go register private replace router</button></li>
            <li><input v-model="prevpage"><button @click="toPrev">上一页</button></li>
            <li><input v-model="nextpage"><button @click="toNext">下一页</button></li>
        </ul>
        <router-view></router-view>
        <router-view name="view_2"></router-view>
        <router-view name="view_3"></router-view> 
    </div>
</template>

<script>
    import router from './router';
    export default {
        data () {
            return {
                text: 'Hello World.'
                ,nextpage: 1
                ,prevpage: 1
            }
        }
        , methods: {
            toFoo () {
                // 对象
                router.push({ path: '/foo' });
            }
            , toBar () {
                // 字符串
                router.push('bar')
            }
            , toAge2 () {
                // 命名的路由
                router.push({name: 'age.home', params: { id: 2 }});
            }
            , toRegister () {
                // 带查询参数，变成 /register?plan=private
                router.push({ path: '/register', query: { plan: 'private' }});
            }
            , toPrev () {
                router.go(-this.prevpage);
            }            
            , toNext () {
                router.go(this.nextpage);
            }
            , toRegister_replace_router () {
                router.replace({ path: '/register', query: { plan: 'private' }});
            }
        }      
    }  
</script>