<template>
     <table>
        <thead>
            <tr>
                <td v-for="item in orders.thead" :key="item" >{{item.title}}</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in orders.tbody" :key="item">
                <td v-for="itemHead in orders.thead" :key="itemHead" v-html="selectType(itemHead.type,item[itemHead.name])">
                    
                </td>
                <!-- <td><span class="status" :class="item.class">{{item.status}}</span></td> -->

            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name:'table-view',
    props:{
        orders:{
            type:Object,
            default:()=>{}
        }
    },
    methods:{
        selectType(type,data)
        {
            console.log(data)
            switch(type)
            {
                case 'text':{
                    var elem="<span class='"+data.class+"'>"+data.title+"</span>"
                    console.log(elem)
                    return elem
                } 
            }
        }
    }
}
</script>

<style>

</style>