<template>
   <div class="cards">
        <card-item v-for="card in cardItems" :key="card.id" :data="card">
            <template #icon> <ion-icon :name="card.icon"></ion-icon></template>
        </card-item>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cardItems:[
                {
                    id:0,
                    name:'Daily Views',
                    number:'1,504',
                    icon:'eye-outline'
                },
                {
                    id:0,
                    name:'Comments',
                    number:'284',
                    icon:'chatbubbles-outline'
                },
                {
                    id:0,
                    name:'Sales',
                    number:'80',
                    icon:'cash-outline'
                },
                {
                    id:0,
                    name:'$7,842',
                    number:'Earning',
                    icon:'cash-outline'
                },
                
            ]
        }
    }
}
</script>

<style>

</style>