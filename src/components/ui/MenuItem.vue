<template>
    <a @click="this.$router.push({path:link})">
        <span class="icon"><slot name="icon"></slot></span>
        <span class="title"><slot name="title"></slot></span>
    </a>
</template>

<script>
export default {
    name:'menu-item',
    props:{
        link:{
            type:String,
            default:"#"
        }
    }
}
</script>

<style>

</style>