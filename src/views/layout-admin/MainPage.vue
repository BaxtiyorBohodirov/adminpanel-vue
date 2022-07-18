<template>
   <div class="main-page">
    <div class="container1">
        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="logo-apple"></ion-icon></span>
                        <span class="title">Brand name</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span class="title">Customers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                        <span class="title">Message</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="help-outline"></ion-icon></span>
                        <span class="title">Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span class="title">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <span class="title">Passwoard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span class="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="main">
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
                <div class="search">
                    <label>
                        <input type="text" placeholder="Search here">
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                </div>
                <div class="user">
                    <img src="@/assets/image/user1.png" alt="">
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
const $ = require('jquery');
window.$ = $;
export default {
  components: { 
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