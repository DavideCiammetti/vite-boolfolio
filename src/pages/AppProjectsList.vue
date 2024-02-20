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
                  console.log(response);
                  if (response.data.status === true) {
                        this.store.projectsData = response.data;

                      } else {
                        // redirect alla pagina 404
                        this.$router.push({ name: 'NotFound' });
                      }
                      // redirect alla pagina no found project in caso di progetti non trovati
                      if((this.store.projectsData.result.data).length <= 0){
                          this.$router.push({ path: '/no-project-found'})
                      }
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                }).finally(()=>{
                  this.loader = false;
                  this.imgShow = true;
                });
            },
            // scorri pagine 
            nextPage(){
              // validazione lo scorrimento delle pagine non oltre il numero max delle pagine
              if(this.currClick >=  this.store.projectsData.result.last_page){

                this.currClick = this.store.projectsData.result.last_page
              }else{
                this.currClick++;
              }
  
              this.$router.push({
              name: 'project',
              query: {
                page: this.currClick,
              },
            });
              this.getProjects();
              console.log(this.currClick);
            },
             // scorri pagine 
            prevPage(){
               // validazione lo scorrimento delle pagine non oltre il numero min delle pagine
              if(this.currClick <= 1){

                this.currClick = 1
              }else{
                this.currClick--;
              }
      
              this.$router.push({
                name: 'project',
                query: {
                  page: this.currClick,
                },
              });
              this.getProjects();
              console.log(this.currClick);
            }
        },
        created(){
            this.currClick = this.$route.query.page ?? 1;

            this.getProjects();

            this.$watch(() => this.$route.params,(toParams, previousParams) => {
            this.currClick = this.$route.query.page ?? 1;
            this.getProjects();
          }
        );
      },
    }
</script>

<template>
    <main class="">
      <div>
          <h2 class="text-center">
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
                <div v-if="/\.(jpg$|png$|svg$|jpeg$)/i.test(projects.img)">
                  <img :src="this.store.imgUrl + projects.img" class="card-img-top" :alt="projects.slug + '.img'">
                </div>
                <div class="card-body">
                  <!-- titolo -->
                    <h5 class="card-title">{{ projects.title }}</h5>
                    <!-- descrizione -->
                   <div v-if="projects.description">
                    <p class="card-text">{{ projects.description.substring(0, 100) }}</p>
                   </div>
                    <!-- tipo di tecnologia usata -->
                    <div class="mt-2">
                      <p class="fs-5 bold mb--2">technologies: </p>
                      <ul>
                        <li v-for="technology in projects.technologies">
                          {{ technology.title}}
                        </li>
                      </ul>
                    </div>
                    <button class="button-show-details">
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
              <button type="button" class="btn btn-primary" @click="prevPage()" v-show="this.store.projectsData.result?.prev_page_url">preview</button>
            </div>

            <div>
              <button type="button" class="btn btn-secondary" @click="nextPage()" v-show="this.store.projectsData.result?.next_page_url">next</button>
            </div>
          </div>
      </div>
    </main>
</template>

<style scoped lang="scss">
.mb--2{
  margin-bottom: -5px;
}

h2{
    font-size: 57px;
    text-transform: uppercase;
    color: #005260;
}
.button-show-details{
  border: none;
  background-color: rgb(64 182 117);
  font-size: 14px;
  color: white;
}
.button-show-details:hover{
  background-color: rgb(0, 129, 56);
}
</style>
