<template>
  <div class="login-form" :style="back">
      <form @submit.prevent="logIn" v-if="login">
        <h1>Sign In</h1>
          <div class="form-group">
              <input @input="input"  v-model="models.email" id="email" name="email" :class="inputErrors.email!=''&&models.email===''?class_input:''" class="form-control"  type="text" placeholder="email...">
              <p class="error-field">{{inputErrors.email}}</p>  
          </div>
          <div class="form-group">
              <input @input="input" v-model="models.password" id="password" name="password" :class="inputErrors.password!=''&&models.password===''?class_input:''" class="form-control"  type="password" placeholder="password...">  
              <p class="error-field">{{inputErrors.password}}</p>  
          </div>
          <button class="btn">Send</button>
          <h4>Don't have an account? &nbsp;&nbsp;&nbsp;&nbsp;<a @click="login=false; currentBack=back2">Sign up here</a></h4>
          <h4>
            <a href="#">Forget your password?</a>
          </h4>
      </form>
       <form @submit.prevent="signUp" v-else>
        <h1>Sign Up</h1>
          <div class="form-group">
              <input @input="input" v-model="models.name" id="name" name="name" :class="inputErrors.name!=''&&models.name===''?class_input:''" class="form-control"  type="text" placeholder="name...">  
              <p class="error-field">{{inputErrors.name}}</p>  
          </div>
          
          <div class="form-group">
              <input @input="input" v-model="models.email" id="email" name="email" :class="inputErrors.email!=''&&models.email===''?class_input:''" class="form-control"  type="email" placeholder="email...">  
              <p class="error-field">{{inputErrors.email}}</p>  
          </div>
          <div class="form-group">
              <input @input="input" v-model="models.password" id="password" name="password" class="form-control" :class="inputErrors.password!=''&&models.password===''?class_input:''" type="password" placeholder="password...">  
              <p class="error-field">{{inputErrors.password}}</p>  
          </div>
          <div class="form-group">
              <input @input="input" v-model="models.confPassword" id="confPassword" name="confPassword" :class="inputErrors.confPassword!=''&&models.confPassword===''?class_input:''" class="form-control"  type="password" placeholder="confirm password...">  
              <p class="error-field">{{inputErrors.confPassword}}</p>  
          </div>
          
          <button class="btn">Send</button>
          <h4>Already have an account? &nbsp;&nbsp;&nbsp;&nbsp;<a @click="login=true; currentBack=back1">Sign in here</a></h4>
      </form>        
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    data()
    {
       return {
          login:true,
          back1:"https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          back2:"https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          currentBack:"",
          class_input:"err-input"
       }
    },
    computed:{
      back()
      {
          return "background:url("+this.currentBack+") no-repeat center center"
      },

      ...mapGetters({
          models:'auth/models',
          inputErrors:'auth/inputErrors'
      })
    },
   mounted(){
      this.currentBack=this.back1
   },
   methods:{
      ...mapActions({
        logIn:'auth/logIn',
        signUp:'auth/signUp'
      }),
      ...mapMutations({
        setModels:'auth/setModels',
        setInputErrors:'auth/setInputErrors'
      }),
      input(e)
      {
        if(e.target.value.length===1)
        {
          this.inputErrors[e.target.name]=''
          console.log(this.inputErrors)
          this.setInputErrors(this.inputErrors)
        }
      }
   }
}
</script>
<style scoped>
    .err-input
    {
      border-color: red !important;
       box-shadow: 0px 0px 10px red;
    }
    .error-field
    {
        color: red;
    }
    .login-form
    {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-size: cover;
    }
    .login-form form
    {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: white;
        padding: 25px;
        width: 350px;
        border-radius: 5px;
    }
    .login-form form input {
      padding: 10px 20px;
      margin: 10px 0px;
      width: 100%;
      color: blue;
      font-weight: bold;
      border: 2px solid blue;
      border-radius: 3px;
    }
    .login-form form input:focus
    {
       outline: none;
       box-shadow: 0px 0px 10px blue;
    }
    .login-form form h1
    {
      margin: 10px 0px;
      color: blue;
    }
    .login-form form button.btn
    {
        background: none;
        padding: 7px 20px;
        align-self: flex-start;
        margin: 10px 0px;
        color: blue;
        font-weight: bold;
        border: 2px solid blue;
    }
    .login-form form button.btn:hover
    {
      background-color: blue;
      color: white;    
      box-shadow: 0px 0px 10px blue;
    }
    .login-form form h4
    {
       margin: 10px 0px;
    }
    .login-form form h4 a
    {
       color: blue;
       text-decoration: none;
    }
    .login-form form h4 a:hover
    {
      text-decoration: underline;
    }
</style>