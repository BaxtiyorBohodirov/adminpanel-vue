<template>
    <div class="details">
      <recent-orders/>
      <recent-customers/>
        
    </div>  
</template>

<script>
import RecentCustomers from './RecentCustomers.vue'
import RecentOrders from './RecentOrders.vue'
export default {
  components: { RecentCustomers, RecentOrders },

}
</script>

<style>

</style>