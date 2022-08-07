import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'

import './style.css'
import App from './App.vue'

createApp(App).use(router).use(store, key).mount('#app')
