<template>
  <div class="welcome container"> 
      <h1>Welcome</h1>
      <div v-if="showLogin">
          <h2>Login</h2>
          <loginForm/>
          <p>No account yet? <span @click="showLogin = false">Signup</span> instead</p>
          </div> 
          <div v-else>
              <h2>Sign Up</h2>
               
               <signup-form/>
               <p>Already registered? <span @click="showLogin = true">Login</span> instead</p>
          </div>
      </div>
       
</template>

<script>

import signupForm from '../components/signupForm.vue'
import loginForm from '../components/loginForm.vue'
import {ref} from 'vue'

export default {
components: {signupForm, loginForm},

setup() {
    const showLogin = ref(true)
    return {showLogin}
}

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}

.welcome form{
    width: 300;
    margin: 20px auto;

}

.welcome label{
    display:block;
    margin: 20px 0 10px;

}
.welcome input{
    width: 90%;
    padding: 10px;
    border-radius: 20px;
    border:1px solid black;
    outline: none;
    color: grey;
    margin: 10px auto;
}

.welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button{
    margin: 20px auto;
}
</style>