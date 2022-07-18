import { createRouter, createWebHistory } from "vue-router"
import AdminPage from '@/views/admin/IndexPage'
import MainPage from '@/views/layout-admin/MainPage'
import IndexPage from '@/views/IndexPage'
import IndexProducts from '@/views/admin/products/IndexProducts'
import CreateProduct from '@/views/admin/products/CreateProduct'
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
                component:AdminPage,
            },
            {
                path:'products',
                component:IndexProducts,
                name:'products.index',
            },
            {
                path:'products/create',
                component:CreateProduct,
                name:'products.create'
            }
        ]
    }
]
const router=createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router