<template>
    <div class="card">
            <div>
                <div class="numbers">{{data.number}}</div>
                <div class="cardName">{{data.name}}</div>
            </div>
            <div class="iconBx">
                <slot name='icon'></slot>                      
            </div>
        </div>
</template>

<script>
export default {
    name:'card-item',
    props:{
        data:{
            type:Object,
            default:()=>{}
        }
    }
}
</script>

<style>

</style>