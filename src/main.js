import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import custom from '@/assets/js/custom'
import store from './store'
const app= createApp(App);
app
.use(router)
.use(custom)
.use(store)
.mount('#app')
