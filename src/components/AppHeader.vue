<script>
    export default{
        name: 'Header',
    };
</script>

<template>
    <header>
        <nav >
            <ul class="d-flex  justify-content-around align-items-center">
                <li class="">
                    <router-link class="text-white fs-6" :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="">
                    <router-link class="text-white fs-6" :to="{name: 'project'}">Projects List</router-link>
                </li>
                <li class="">
                    <router-link class="text-white fs-6" :to="{name: 'about'}">About</router-link>
                </li>
                
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
// @use '../style/partials/_responsive.scss' as *;
header{
    height: 80px;
    background: linear-gradient(to right, rgb(0, 151, 68) 0%, rgb(5, 187, 172) 70%);

    nav{
        height: 100%;

        ul{
            height: 100%;
        }
    }
}

</style>
