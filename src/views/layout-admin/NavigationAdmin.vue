<template>
   <div class="navigation">
        <ul>
            <li v-for="item in menuItems" :key="item.id">
                <menu-item :link="item.link">
                    <template #icon><ion-icon :name="item.icon"></ion-icon></template>
                    <template #title>{{item.title}}</template>
                </menu-item>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
                menuItems:[
            {
                icon:"logo-apple",
                title:"Brand name"
            },
            {
                link:"/admin",
                icon:"home-outline",
                title:"Dashboard"
            },
            {
                link:"/admin/users",
                icon:"people-outline",
                title:"Customers"
            },
            {
                link:"/admin/products",
                icon:"albums-outline",
                title:"Products"
            },
            {
                icon:"chatbubble-outline",
                title:"Message"
            },
            {
                icon:"help-outline",
                title:"Help"
            },
            {
                icon:"settings-outline",
                title:"Settings"
            },
            {
                icon:"lock-closed-outline",
                title:"Passwoard"
            },
            {
                icon:"log-out-outline",
                title:"Sign Out"
            },

        ]
        }
    }
}
</script>

<style>

</style>