import router from "@/router";
import {index, show, destroy, update,  store} from '@/api/products'
export const actions={
   async getProducts({commit, dispatch}){
        const products=await index();


        commit('setProducts',products)
        commit('setAllProducts',products)
        if(localStorage.filterArr)
        {
            commit('setFilterArr',JSON.parse(localStorage.getItem('filterArr')))
            dispatch('filter')
        }
    },
   async deleteProduct({dispatch},id)
    {   
        if(confirm('Are you sure to delete this data?'))
        {
            const response=await destroy(id)
            console.log(response)
            dispatch('getProducts')
            router.push({name:'products.index'})
        }
    },
    filter({state, commit}){
        let i=true
        for (const key in state.filterArr) {
            if(i)
            {
              commit('setProducts',state.allProducts.filter(x=>x[key].toString().toLowerCase().includes(state.filterArr[key].toString().toLowerCase())))
                i=false
            }
            else
            {
              commit('setProducts',state.products.filter(x=>x[key].toString().toLowerCase().includes(state.filterArr[key].toString().toLowerCase())))
            }
        }
        localStorage.setItem('filterArr',JSON.stringify(state.filterArr))
    },
   async submitData({state,commit})
    {
        if(state.type==='edit')
        {
            await update(state.id, state.models)
        }
        else{
            await store(state.models)
        }
        
        commit('setModels',{
            title_uz:'',
            title_ru:'',
            title_en:'',
            content_uz:'',
            content_ru:'',
            content_en:'',
            status:'',
            order:''
        })
        router.push({name:'products.index'})
    },
    async getProduct({state,commit}){
        const response =await show(state.id)
        commit('setProduct',response)
        commit('setModels',state.product)
    }
}