<script>
    export default{
        name: 'Header',
    };
</script>

<template>
    <header class="bg-primary pe-2 position-fixed">
        <nav class="">
            <ul class="d-flex flex-column justify-content-around">
                <li class="mt-2">
                    <router-link class="text-white fs-6" :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="my-3">
                    <router-link class="text-white fs-6" :to="{name: 'project'}">Projects List</router-link>
                </li>
                <li>
                    <router-link class="text-white fs-6" :to="{name: 'about'}">About</router-link>
                </li>
                
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
// @use '../style/partials/_responsive.scss' as *;
header{
    right: 0;
    height: 205px;
    nav{
        height: 100%;

        ul{
            height: 100%;
        }
    }
}

</style>
