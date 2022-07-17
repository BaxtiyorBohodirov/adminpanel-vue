import { createRouter, createWebHistory } from "vue-router"
import AdminPage from '@/views/admin/IndexPage'
import MainPage from '@/views/layout-admin/MainPage'
import IndexPage from '@/views/IndexPage'
const routes=[
    {
        path:'/',
        component:IndexPage
    },
    {
        path:'/admin',
        component:MainPage,
        children:[
            {
                path:'',
                component:AdminPage
            }
        ]
    }
]
const router=createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router