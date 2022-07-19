<template>
        <div class="edit-add view show">
            <h3 style="margin: 20px 0px">Products</h3>
            <a  @click="$router.push({name:'products.edit',params:{id:product.id}})" class="btn">Update</a>
            <a  @click="deleteProduct(product.id)" class="btn btn-delete">Delete</a>
            <table class="table" width="100%">
                <tr>
                    <th>Id</th>
                    <td>{{product.id}}</td>
                </tr>
                <tr>
                    <th>Title Uz</th>
                    <td>{{product.title_uz}}</td>
                </tr>
                <tr>
                    <th>Title Ru</th>
                    <td>{{product.title_ru}}</td>
                </tr>        

                <tr>
                    <th>Content Uz</th>
                    <td>{{product.content_uz}}</td>
                </tr>        

                <tr>
                    <th>Content Ru</th>
                    <td>{{product.content_ru}}</td>
                </tr>        

                <tr>
                    <th>Content En</th>
                    <td>{{product.content_en}}</td>
                </tr>        
                <tr>
                    <th>Status</th>
                    <td>{{product.status}}</td>
                </tr>
                <tr>
                    <th>Order</th>
                    <td>{{product.order}}</td>
                </tr>
            </table>
        </div>   
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    methods:{
        ...mapActions({
                getProduct:'products/getProduct',
                deleteProduct:'products/deleteProduct'
        }),
        ...mapMutations({
            setId:'products/setId'
        })
      
    },
    computed:{
        ...mapState({
            product:state=>state.products.product,
            id:state=>state.products.id,
        })
    },
    mounted()
    {
        this.setId(this.$route.params.id)
        this.getProduct()
    }
}
</script>

<style>

</style>