<script>
    import axios from 'axios';
    import { store } from '../store';
    export default{
      name:'AppProjectsList',
        data(){
                return{
                store,
                // variabile per la gestione della paginazione
                currClick: 1,
                loader: false,
            }
        },
        methods:{
            getProjects(){
              this.loader = true;
                axios.get(this.store.baseUrl + this.store.apiUrls.projects + this.store.pagination + this.currClick).then((response)=>{
                  if (response.data.status === true) {
                        this.store.projectsData = response.data;

                      } else {
                        // redirect alla pagina 404
                        this.$router.push({ name: 'NotFound' })
                      }
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                }).finally(()=>{
                  this.loader = false;
                });
            },
            // cambia numero di pagina 
            nextPage(){
              this.currClick++;
              this.getProjects();
              console.log(this.currClick);
            },
            prevPage(){
              this.currClick--;
              this.getProjects();
              console.log(this.currClick);
            }
        },
        created(){
            this.getProjects();
        },
    }
</script>

<template>
    <main class="my-5">
      <div>
          <h2 class="ms-4">
            lista dei projetti
          </h2>
          <!-- error advertise -->
          <div class="spinner-border text-primary ms-4" role="status" v-show="this.loader">
            <span class="visually-hidden">Loading...</span>
          </div>
          <!-- cards -->
          <div class="d-flex flex-wrap flex-direction-column justify-content-center gap-4 " v-show="!this.loader">
              <div class="card" v-for=" projects in this.store.projectsData.result?.data" style="width: 18rem;">
                <!-- immagine -->
                <img :src="this.store.imgUrl + projects.img" class="card-img-top" :alt="projects.slug + '.img'">
                <div class="card-body">
                  <!-- titolo -->
                    <h5 class="card-title">{{ projects.title }}</h5>
                    <!-- descrizione -->
                    <p class="card-text">{{ projects.description.substring(0, 100) }}</p>
                    <!-- tipo di tecnologia usata -->
                    <p v-for="technology in projects.technologies" >technologies: {{ technology.title}}</p>
                    <button>
                      <router-link :to="{ name: 'projectDetail', params: { slug: projects.slug }  }" class="nav-link">
                        view details
                      </router-link>

                    </button>
                </div>
            </div>
          </div>
          <!-- button next e prev  -->
          <div class="d-flex justify-content-between mx-4 mt-4">
            <div>
              <button type="button" class="btn btn-primary" @click="prevPage()" v-show="this.store.projectsData.data?.prev_page_url">preview</button>
            </div>

            <div>
              <button type="button" class="btn btn-secondary" @click="nextPage()" v-show="this.store.projectsData.data?.next_page_url">next</button>
            </div>
          </div>
      </div>
    </main>
</template>

<style>
</style>
