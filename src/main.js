import './assets/main.css'

import { createApp } from 'vue'
import App from './Main.vue'
import router from '../router/index'

createApp(App).use(router).mount('#app')
