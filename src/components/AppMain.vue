<script>
import axios from 'axios';
import { store } from '../store';
    export default{
        name: 'Main',
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
    <main>
        <div class="d-flex flex-wrap flex-direction-column justify-content-center gap-4 ">
            <div class="card" v-for=" projects in this.store.projects_list" style="width: 18rem;">
            <!-- <img :src="{{ projects.img }}" class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{ projects.title }}</h5>
                <p class="card-text">{{ projects.title }}</p>
            </div>
        </div>
        </div>
    </main>
</template>

<style>
</style>
