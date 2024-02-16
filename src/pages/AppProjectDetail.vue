<script>
    import axios from 'axios';
    import { store } from '../store';
    export default{
        name:'AppProjectDetail',
        data(){
            return{
                store,
            }
        },
        methods:{
            getProject(){
                axios.get(this.store.baseUrl + this.store.apiUrls.projects + '/' + this.$route.params.slug).then((response)=>{
                    console.log( response);
                    this.store.singleProject = response.data;
                    console.log('sono response ' +   response);
                }).catch((error)=>{
                    console.log(error);
                });
            },
            
        },
        created(){
            this.getProject();
        }
    }
</script>

<template>
    <div class="d-flex flex-wrap flex-direction-column justify-content-center gap-4 ">
              <div class="card" style="width: 18rem;">
                <img :src="this.store.imgUrl + this.store.singleProject.img" class="card-img-top" :alt="this.store.singleProject.slug + '.img'">
                <div class="card-body">
                    <h5 class="card-title">{{ this.store.singleProject.title }}</h5>
                    <p class="card-text">{{ this.store.singleProject.description }}</p>
                    <button>
                      <router-link :to="{ name: 'project'}" class="nav-link">
                        view details
                      </router-link>

                    </button>
                </div>
            </div>
          </div>
</template>

<style>
</style>
