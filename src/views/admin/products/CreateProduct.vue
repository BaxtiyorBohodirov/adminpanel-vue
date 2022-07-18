<template>
        <div class="create-product view">
            <h3>Create Product</h3>
            <form-product v-model="models"></form-product>
        </div>
</template>

<script>
import FormProduct from './FormProduct.vue'
export default {
    data(){
        return{
          
        }
    },
    components:{
        FormProduct
    }
}
</script>

<style>

</style>