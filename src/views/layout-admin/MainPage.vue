<template>
   <div class="main">
      <sidebar-page/>
      <router-view></router-view>
   </div>
</template>

<script>
import SidebarPage from './SidebarPage.vue'
export default {
  components: { 
   SidebarPage,
},

}
</script>

<style>
   .main
   {
         display: flex;
         
   }
</style>