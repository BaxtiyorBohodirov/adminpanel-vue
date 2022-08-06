<template>
    <div class="recentCustomers">
        <div class="cardHeader">
            <h2>Recent Customer</h2>
        </div>
        <table border="0">
            <tr>
                <td width="60px">
                    <div class="imgBx">
                        <img src="@/assets/image/user.png" alt="">
                    </div>
                </td>
                <td>
                    <h4>David<br>
                        <span>Italy</span>
                    </h4>
                </td>
            </tr>
            <tr>
                <td width="60px"><div class="imgBx"><img src="@/assets/image/user1.png" alt=""></div></td>
                <td><h4>David<br><span>Italy</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div class="imgBx"><img src="@/assets/image/user1.png" alt=""></div></td>
                <td><h4>David<br><span>Italy</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div class="imgBx"><img src="@/assets/image/user1.png" alt=""></div></td>
                <td><h4>David<br><span>Italy</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div class="imgBx"><img src="@/assets/image/user1.png" alt=""></div></td>
                <td><h4>David<br><span>Italy</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div class="imgBx"><img src="@/assets/image/user1.png" alt=""></div></td>
                <td><h4>David<br><span>Italy</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div class="imgBx"><img src="@/assets/image/user1.png" alt=""></div></td>
                <td><h4>David<br><span>Italy</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div class="imgBx"><img src="@/assets/image/user1.png" alt=""></div></td>
                <td><h4>David<br><span>Italy</span></h4></td>
            </tr>
        </table> 
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            customers:{
                thead:[
                    {
                        type:'image',
                        name:'image',
                        title:''
                    },
                    {
                        type:'text',
                        name:'name',
                        title:''
                    }
                ],
                tbody:[
                    {
                        image:{
                            src:'@/assets/image/user1.png',
                            class:'imgBx'
                        },
                        
                    }
                ]
            }
        }
    }

}
</script>

<style>

</style>