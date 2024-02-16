import {reactive} from 'vue';

export const store = reactive({
    baseUrl:'http://127.0.0.1:8000',
    // url per prendere dati api json
    apiUrls:{
        projects: '/api/projects',
    },
    // oggetto vuoto per prendere tutti i dati  
    projectsData:{},
    singleProject: {},
    imgUrl: 'http://127.0.0.1:8000/storage/',
    // parte url per paginazione
    pagination: '?page=',
});