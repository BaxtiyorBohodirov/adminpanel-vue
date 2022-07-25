<template>
   <div class="main-page">
    <div class="container1">
        <navigation-admin/>
        <admin-main/>
    </div>
</div>
</template>

<script>
import AdminMain from './AdminMain.vue';
import NavigationAdmin from './NavigationAdmin.vue';
const $ = require('jquery');
window.$ = $;
export default {
  components: {
    NavigationAdmin,
    AdminMain 
}, 
data(){
    return{
    }
},
mounted(){
        $('.create-product input[type=file]').change(function(ev){
            var files=ev.target.files;

            let parent=$(ev.target).parent();
            $(parent).css('border','2px solid red');
            for (let file of files) {
                filesArr.items.add(file);
            }
            ev.target.files=filesArr.files;
            console.log(ev.target.files);
            for (let i=0;i<files.length;i++) {
                let url=window.URL.createObjectURL(files[i]);
                $('.create-product div.images img:last').attr('src',url);
                $('.create-product div.images').append('<img src/>');
                let image=document.querySelector('.create-product div.images img:last-child');
                observer.observe(image,{
                    attributes:true,
                    attributeOldValue: true,
                });
            }
            
        });
        function changeAttr(mutation)
        {
            for (const item of mutation) {
                console.log(item.oldValue);
                window.URL.revokeObjectURL(item.oldValue);
            }
        }
        let observer=new MutationObserver(changeAttr);
        let images=document.querySelectorAll('.create-product div.images img');
        if(images)
        {
            for (let item of images) {
                observer.observe(item,{
                    attributes:true,
                    attributeOldValue: true,
                });    
            }
            var filesArr=new DataTransfer();
        }
        $('.toggle').click(function(){
            $('.toggle').toggleClass('toggle-rotate')
            document.querySelector('.navigation').classList.toggle('active');
            document.querySelector('.main').classList.toggle('active');
        });
        $('.navigation ul li').hover(function(ev){
            $('.hovered').removeClass('hovered');
            $(ev.target).parent().addClass('hovered');
        });
    }
}


</script>
<style>
   @import url('../../assets/css/app.css');
    .toggle
    {
        transition-duration: 0.5s;
        transform: rotateZ(0deg);
    }
    .toggle-rotate{
    transform:rotateZ(360deg)
    }
</style>