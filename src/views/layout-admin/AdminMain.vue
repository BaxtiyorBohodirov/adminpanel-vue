<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>