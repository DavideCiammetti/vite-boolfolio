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
                    this.store.projects_list = response.data.data;
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
        <div v-for=" projects in this.store.projects_list">
            {{ projects.title }}
        </div>
    </main>
</template>

<style>
</style>
