<template>
    <div class="form-edit">
        <form method="POST" @submit.prevent="submitData"  enctype="multipart/form-data">
            <!-- @csrf
            @if(product?       .       @method('PUT')
            @endif -->
            <div class="form-group">
                <label for="title_uz">Title Uz</label><br>
                <input  v-model="models.title_uz" type="text"  id="title_uz" name="title_uz" required>
                <!-- @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror -->
            </div>

            <div class="form-group">
                <label for="title_ru">Title Ru</label><br>
                <input  v-model="models.title_ru" type="text" id="title_ru" name="title_ru" required>
                <!-- @error('title')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror -->
            </div>
             <div class="form-group">
                <label  for="title_en">Title En</label><br>
                <input  v-model="models.title_en" type="text" id="title_en" name="title_en" required>
                <!-- @error('title')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror -->
            </div>
            <div class="form-group">
                <label for="content_uz">Content Uz</label><br>
                <input  v-model="models.content_uz" type="text"  id="content_uz" name="content_uz" required>
                <!-- @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror -->
            </div>

            <div class="form-group">
                <label for="content_ru">Content Ru</label><br>
                <input  v-model="models.content_ru" type="text" id="content_ru" name="content_ru"  required>
                <!-- @error('content')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror -->
            </div>
             <div class="form-group">
                <label for="content_en">Content En</label><br>
                <input  v-model="models.content_en" type="text" id="content_en" name="content_en" required>
                <!-- @error('content')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror -->
            </div>
            
            <div class="form-group">
                <label for="status">Status</label><br>
                <input  v-model="models.status" type="text" id="status" name="status"  required>
                <!-- @error('status')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror -->
            </div>
            <div class="form-group">
                <label for="order">Order</label><br>
                <input  v-model="models.order" type="text" id="order" name="order"  required> 
                <!-- @error('order')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror -->
            </div>
            <input type="submit" class="btn btn-create" value="Save">
        </form>
    </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    data(){
        return{
        }
    },
    
    methods:{
        ...mapActions({
            submitData:'products/submitData',
            getProduct:'products/getProduct',

        }),
       ...mapMutations({
            setId:'products/setId',
            setType:'products/setType',
            setModels:'products/setModels',
            setProduct:'products/setProduct',
       })
    },
    mounted(){

        if(this.$route.params.id!=null)
        {
            this.setType('edit')
            this.setId(this.$route.params.id)
            this.getProduct()
        }
        else
        {
            this.setModels({
                title_uz:'',
                title_ru:'',
                title_en:'',
                content_uz:'',
                content_ru:'',
                content_en:'',
                status:'',
                order:''
            })
        }
    },
    computed:{
        ...mapState({
            id:state=>state.products.id,
            type:state=>state.products.type,
            models:state=>state.products.models,
            product:state=>state.products.product
        })
    }
}
</script>

<style>

</style>