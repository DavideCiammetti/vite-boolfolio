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
        sono main
    </main>
</template>

<style>
</style>
