import VueCookies from 'vue-cookies'

export const state={
    is_auth:VueCookies.get('token')?true:false,
    nextRoute:'',
    models:{
        name:'',
        email:"",
        password:"",
        confPassword:"",
    },
    inputErrors:{
        name:'',
        email:'',
        password:'',
        confPassword:'',
    }
}