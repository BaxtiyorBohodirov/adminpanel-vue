<template>
        <div class="edit-add view index">
            <h3>Products</h3>
            
            <a  @click="$router.push({name:'products.create'})" style="display: inline-block;" class="btn btn-create">Create Product</a>
            <table class="table" width="100%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title Uz</th>
                        <th>Content Uz</th>
                        <th>Status</th>
                        <th>Order</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input @input="filter" v-model.trim="filterArr.id" name="id" type="text"></td>
                        <td><input @input="filter" v-model.trim="filterArr.title_uz" name="title_uz" type="text"></td>
                        <td><input @input="filter" v-model.trim="filterArr.content_uz" name="content_uz" type="text"></td>
                        <td>
                            <select @change="filter" v-model.trim="filterArr.status" name="status" id="order">
                                <option value="" selected>All</option>
                                <option value="1">Published</option>
                                <option value="0">Not Published</option>
                            </select>
                        </td>
                        <td>
                            <input @input="filter" v-model.trim="filterArr.order" name="order" type="number">
                        </td>
                    </tr>
                    <tr v-for="product in products" :key="product.id">    
                        <td>{{product.id}}</td>
                        <td class="min-w-150">{{product.title_uz}}</td>
                        <td class="min-w-150">{{product.content_uz}}</td>
                        <td>
                            <span v-if="product.status" class="status published">
                                    Published
                            </span>
                            <span v-else class="status not_published">    
                                    Not Published
                            </span>            
                        </td>
                        <td>{{product.order}}</td>
                        <td>
                            <div class="buttons">       
                                <a @click="$router.push({path:'products/edit/'+product.id})" class="btn btn-update">Update</a>
                                <a @click="$router.push('products/show/'+product.id)" class="btn btn-show">Show</a>
                                <a @click="deleteProduct(product.id)" class="btn btn-delete">Delete</a>
                            </div>
                        </td>
                    </tr>
                        <tr v-if="products.length===0">
                            <td style="display: table-cell; text-align:end" colspan="7">
                                Hech narsa topilmadi
                            </td>
                        </tr>
                   
                </tbody>
            </table>
        </div>
</template>

<script>
import { mapState, mapActions,mapMutations } from "vuex";
export default {
    data(){
        return{
        }
    },
    methods:{
       ...mapActions({
            getProducts:'products/getProducts',
            deleteProduct:'products/deleteProduct',
            filter:'products/filter'
       }),
       ...mapMutations({
            setProducts:'products/setProducts',
            setAllProducts:'products/setAllProducts',
            setFilterArr:'products/setFilterArr'
       }),
      
    },
    props:{
        
    },
    beforeCreate(){

    },
    beforeMount()
    {
        this.getProducts()
    },
    mounted(){
    console.log(this.products)
    // if(localStorage.filterArr)
        // {
        //     const filterArr=JSON.parse(localStorage.getItem('filterArr'));
        //     this.setFilterArr(filterArr)
        // }
    
    },
    created(){
       
    },
    computed:{
        ...mapState(
            {
                products:state=>state.products.products,
                allProducts:state=>state.products.allProducts,
                filterArr:state=>state.products.filterArr
            },
        )
    }
}
</script>

<style>

</style>