<template>
<div id='app'>
    <!--
    <img src='./assets/logo.png' />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div id='nav'>
        <router-link to='/'> Home</router-link>
        <router-link to='/contact'>Contact </router-link>
    </div>
    <router-view />
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        // HelloWorld
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#nav a {
    padding: 0 10px;
}
</style>
