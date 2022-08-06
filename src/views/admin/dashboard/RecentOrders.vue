<template>
    <div class="recentOrders">
        <div class="cardHeader">
            <h2>Recent Order</h2>
            <a href="#" class="btn">View All</a>
        </div>
        <table-view :orders="orders"/>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            orders:{
                thead:[
                    {
                        type:'text',
                        title:'Name',
                        name:'name'
                    },
                    {
                        type:'text',
                        title:'Price',
                        name:'price'
                    },
                    {
                        type:'text',
                        title:'Payment',
                        name:'payment'
                    },
                    {
                        type:'text',
                        title:'Status',
                        name:'status'
                    },
                ],
                tbody:[
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"Delivered",
                            class:"status delivered",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"In Progress",
                            class:"status inprogress",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"Pending",
                            class:"status pending",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"Delivered",
                            class:"status delivered",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"Return",
                            class:"status return",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"Delivered",
                            class:"status delivered",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"In Progress",
                            class:"status inprogress",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"Pending",
                            class:"status pending",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"Delivered",
                            class:"status delivered",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"Return",
                            class:"status return",
                        },
                    },
                    {
                        name:{
                            title:"Baxtiyor",
                        },
                        price:{
                            title:"$1200"
                        },
                        payment:{
                            title:"Paid"
                        },
                        status:{
                            title:"Pending",
                            class:"status pending",
                        },
                    },
                ]
            }
        }
    }
}
</script>

<style>

</style>