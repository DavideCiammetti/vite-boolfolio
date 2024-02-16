<script>
    export default{
        name: 'Header',
    };
</script>

<template>
    <header class="bg-primary py-3">
        <nav class="d-flex justify-content-around">
            <div>
                logo
            </div>
            <ul class="d-flex ">
                <li>
                    <router-link class="text-white fs-5" :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="mx-5">
                    <router-link class="text-white fs-5" :to="{name: 'project'}">Projects List</router-link>
                </li>
                <li>
                    <router-link class="text-white fs-5" :to="{name: 'about'}">About</router-link>
                </li>
                
            </ul>
        </nav>
    </header>
</template>

<style>
</style>
