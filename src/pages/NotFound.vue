<script>
    export default{
      name:'NotFound',
    }
</script>

<template>
    <main>
        <div class="col-12">
        <h1 class="text-center">page not found</h1>
       <div class="d-flex justify-content-center ">
            <p class="me-3"><router-link class="text-primary fs-4" :to="{name: 'home'}">Home</router-link></p>
            <p class="ms-3"><router-link class="text-primary fs-4" :to="{name: 'project'}">Projects List</router-link></p>
       </div>
    </div>
    </main>
</template>

<style>
</style>
