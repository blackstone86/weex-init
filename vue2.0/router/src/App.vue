<template>
    <div id="app">
        <h1>Hello App!</h1>
        <ul>
            <li><router-link to="/foo">Go to Foo</router-link></li>
            <li><router-link to="/bar">Go to Bar</router-link></li>
            <li><router-link to="/user/1">Go to User 1</router-link></li>
            <li><router-link :to="{ name: 'user', params: { id: 2 }}">Go to User 2</router-link></li>
            <li><router-link to="/views">Go to Views</router-link></li>
        </ul>
        <router-view></router-view>
        <router-view name="view_2"></router-view>
        <router-view name="view_3"></router-view>
    </div>
</template>