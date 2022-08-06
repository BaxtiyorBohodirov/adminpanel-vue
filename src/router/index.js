import { createRouter, createWebHistory } from "vue-router"
import AdminPage from '@/views/admin/IndexPage'
import MainPage from '@/views/layout-admin/MainPage'
import IndexPage from '@/views/IndexPage'
import IndexProducts from '@/views/admin/products/IndexProducts'
import CreateProduct from '@/views/admin/products/CreateProduct'
import viewProduct from '@/views/admin/products/ViewProduct'
import  LoginPage from '@/views/login/LoginMain'
import store from "@/store/"
const routes=[
    {
        path:'/',
        component:IndexPage,
        name:'home',
    },
    {
        path:"/login",
        name:"login",
        component:LoginPage
    },
    {
        path:'/admin',
        component:MainPage,
        children:[
            {
                path:'',
                component:AdminPage,
                name:'adminpage'
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
router.beforeEach((to,from,next)=>{
    const IS_AUTH = store.getters['auth/IS_AUTH']
    if(to.name==='login')
    {
        return  next()
    }
    if(IS_AUTH)
    {
        return next()
    }
    else
    {
        store.commit('auth/setNextRoute',to.name);
        console.log(to);
        return next({name:'login'})    
    }
})

export default router