import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import custom from '@/assets/js/custom'
import store from './store'
import components from '@/components/ui'
import  VueCookies from 'vue-cookies'
const app= createApp(App);

components.forEach(component=>{
    app.component(component.name,component)
})

app
.use(router)
.use(custom)
.use(store)
.use(VueCookies)
.mount('#app')
