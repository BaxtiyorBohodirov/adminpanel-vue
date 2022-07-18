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
                        <td><input @input="filter" v-model="filterArr.id" name="id" type="text"></td>
                        <td><input @input="filter" v-model="filterArr.title_uz" name="title_uz" type="text"></td>
                        <td><input @input="filter" v-model="filterArr.content_uz" name="content_uz" type="text"></td>
                        <td>
                            <select @change="filter" v-model="filterArr.status" name="status" id="order">
                                <option value="" selected disabled></option>
                                <option value="1">Published</option>
                                <option value="0">Not Published</option>
                            </select>
                        </td>
                        <td>
                            <input @input="filter" v-model="filterArr.order" name="order" type="number">
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
                            <span v-else>    
                                    Not Published
                            </span>            
                        </td>
                        <td>{{product.order}}</td>
                        <td>
                            <div class="buttons">       
                                <a @click="route({name:'products.edit',params:{id:product.id}})" class="btn btn-update">Update</a>
                                <a @click="route({name:'products.show',params:{id:product.id}})" class="btn btn-show">Show</a>
                                <a @click="route({name:'products.destroy',params:{id:product.id}})" onclick="return confirm('Are you sure to delete this data?')" class="btn btn-delete">Delete</a>
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
import axios from 'axios'
export default {
    data(){
        return{
            products:[],
            allProducts:[],
            filterArr:{
                id:'',
                title_uz:'',
                content_uz:'',
                status:'',
                order:'',
            }
        }
    },
    methods:{
        async getProducts(){
            const products=await axios.get('http://127.0.0.1:8000/api/products');
            this.products=products.data.data;
            this.allProducts=this.products;
        },
        filter(){
            let i=true
            for (const key in this.filterArr) {
                if(i)
                {
                    this.products=this.allProducts.filter(x=>x[key].toString().toLowerCase().includes(this.filterArr[key].toString().toLowerCase()))
                    i=false                    
                }
                else
                {
                    this.products=this.products.filter(x=>x[key].toString().toLowerCase().includes(this.filterArr[key].toString().toLowerCase()))
                }
        }
        }
    },
    props:{
        
    },
    mounted(){
       this.getProducts();
    }
}
</script>

<style>

</style>