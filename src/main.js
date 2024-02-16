import { createApp } from 'vue'
//import scss
import './scss/style.scss'
// Import Bootstrap's JS
import * as bootstrap from 'bootstrap'
// importo router
import {router} from './router'

import App from './App.vue'

createApp(App).use(router).mount('#app')
