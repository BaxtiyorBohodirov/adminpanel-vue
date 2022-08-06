import { login, signUp } from "@/api/auth"
import VueCookies from 'vue-cookies'
import router from "@/router"
export const actions = {
   async logIn({state,commit})
    {
        let errors = state.inputErrors
        let error=false 
        const loginArr=['email','password']
        for (const key in state.models) {
            if(loginArr.includes(key))
            {
                if(state.models[key]==='')
                {
                    console.log(key)
                    errors[key]='This field is required'
                    error=true
                }
                else
                {
                    errors[key]=''
                }
            }
        }
        if(error)
        {
            commit('setInputErrors',errors)
            return;
        }
        const response=await login(state.models)
        if(response.type==='success')
        {
            commit('setIsAuth',true)
            VueCookies.set('token',response.token,60*60*24)
            VueCookies.set('user',response.user,60*60*24)
            router.push({name:state.nextRoute?state.nextRoute!='login'?state.nextRoute:'adminpage':'adminpage'})
        }
        if(response.type==='error')
        {
            console.log(response.message);
            errors['password']=response.message;
            commit('setInputErrors',errors)
        }
    },
    async signUp({state, commit})
    {
        let errors = state.inputErrors
        let error=false 
        for (const key in state.models) {
            if(state.models[key]==='')
            {
                errors[key]='This field is required'
                error=true
            }
            else
            {
                errors[key]=''
            }
        }
        if(state.models.password!=''&&state.models.confPassword!=''&&state.models.password!=state.models.confPassword)
        {
            errors.confPassword='The password confirmation does not match with password!'
            error=true
        }
        if(error)
        {
            commit('setInputErrors',errors)
            return;
        }
        const response= await signUp(state.models)
        if(response.type==='success')
        {
            VueCookies.set('token',response.token,60*60*24)
            VueCookies.set('user',response.user,60*60*24)
            console.log('You logged in')
            commit('setIsAuth',true)
            router.push({name:state.nextRoute?state.nextRoute!='login'?state.nextRoute:'adminpage':'adminpage'})
        }
        if(response.type==='error')
        {
            errors.email=response.message
        }
    }
}