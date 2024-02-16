<script>
    import axios from 'axios';
    import { store } from '../store';
    export default{
      name:'AppProjectsList',
        data(){
                return{
                    store,
                }
            },
            methods:{
                getProjects(){
                    axios.get(this.store.baseUrl + this.store.apiUrls.projects).then((response)=>{
                        this.store.projects_list = response.data.data.data;
                        console.log(response);
                    }).catch((error)=>{
                        console.log(error);
                    });
                },
            },
            created(){
                this.getProjects();
            }
    }
</script>

<template>
     <main class="my-5">
        <div class="d-flex flex-wrap flex-direction-column justify-content-center gap-4 ">
            <div class="card" v-for=" projects in this.store.projects_list" style="width: 18rem;">
            <img :src="this.store.imgUrl + projects.img" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ projects.title }}</h5>
                <p class="card-text">{{ projects.title }}</p>
                <p v-for="technology in projects.technologies" >technologies: {{ technology.title}}</p>
            </div>
        </div>
        </div>
    </main>
</template>

<style>
</style>
