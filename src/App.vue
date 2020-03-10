<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/logo.png">-->
        <!--    <HelloWorld msg="欢迎首次登录系统"/>-->
        <HsGamePerformance/>
    </div>
</template>

<script>
    import HsGamePerformance from './components/HsGamePerformance.vue'

    export default {
        name: 'App',
        components: {
            HsGamePerformance
        },
        mounted() {


        }
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>
