import { createRouter, createWebHistory } from "vue-router"
import AdminPage from '@/views/admin/IndexPage'
import MainPage from '@/views/layout-admin/MainPage'
import IndexPage from '@/views/IndexPage'
import IndexProducts from '@/views/admin/products/IndexProducts'
import CreateProduct from '@/views/admin/products/CreateProduct'
import viewProduct from '@/views/admin/products/ViewProduct'
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
            },
            {
                path:'products/show/:id',
                component:viewProduct,
                name:'products.show'
            },
            {
                path:'products/edit/:id',
                component:CreateProduct,
                name:'products.edit'
            }
        ]
    }
]
const router=createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})
// router.beforeEach((to,from,next)=>{
//     // if(IS_ADMIN)
//     // {
//     //     next()
//     // }
// })

export default router