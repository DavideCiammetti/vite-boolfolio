import {reactive} from 'vue';

export const store = reactive({
    baseUrl:'http://127.0.0.1:8000',
    apiUrls:{
        projects: '/api/projects',
    },
    projects_list:[],
    imgUrl: 'http://127.0.0.1:8000/storage/',
});