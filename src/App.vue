<script>
    import AppHeader from './components/AppHeader.vue';
    import AppFooter from './components/AppFooter.vue';
    export default{
      name:'App',
        components:{
            AppHeader,
            AppFooter,
        }
    }
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style>
</style>
