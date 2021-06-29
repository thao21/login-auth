<template>
  <main class="form-login d-flex justify-content-center align-items-center">
    <section class="login-wrapper">
      <div class="container">
        <form @submit.prevent="handleRegister" class="form-auth">
          <div class="form-group" :class="[$v.fullname.$error ? 'error' : '' ]">
             <input v-model.trim="$v.fullname.$model" type="text" class="form-control" placeholder="Input your name"/>
            <svg class="icon-auth" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.09 13.423a6.574 6.574 0 00-1.416-2.1 6.602 6.602 0 00-2.1-1.418c-.008-.003-.015-.005-.022-.009A4.359 4.359 0 104.64 6.363c0 1.454.712 2.742 1.807 3.535l-.02.009a6.546 6.546 0 00-2.101 1.417 6.603 6.603 0 00-1.936 4.528.14.14 0 00.14.144h1.056a.14.14 0 00.14-.137 5.24 5.24 0 011.544-3.591A5.238 5.238 0 019 10.723c1.41 0 2.733.548 3.73 1.545a5.24 5.24 0 011.543 3.591.14.14 0 00.14.137h1.055a.142.142 0 00.101-.042.14.14 0 00.04-.102 6.55 6.55 0 00-.519-2.43zM9 9.387A3.004 3.004 0 016.862 8.5a3.004 3.004 0 01-.886-2.138c0-.807.315-1.566.886-2.137A3.004 3.004 0 019 3.34c.806 0 1.566.314 2.137.886.571.571.886 1.33.886 2.137 0 .807-.315 1.566-.886 2.138A3.004 3.004 0 019 9.387z" fill="#262626"/>
            </svg>
          </div>
          <div class="error-mess d-flex" v-if="$v.fullname.$error">
            <span v-if="!$v.fullname.required">Name is required.</span>
             <span v-if="!$v.fullname.minLength">Name must have at least 5 characters.</span>
          </div>
          <div class="form-group" :class="[$v.registerID.$error ? 'error' : '' ]">
            <input v-model.trim="$v.registerID.$model" type="email" class="form-control" id="email" placeholder="e-mail@dosoftpro.com"/>
            <svg class="icon-auth" xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" version="1.1">
              <g id="surface1">
              <path style=" stroke:none;fill-rule:evenodd;fill:rgb(6.27451%,6.27451%,6.27451%);fill-opacity:1;" d="M 1.15625 11.882812 L 1.15625 3.054688 L 8.230469 8.214844 C 8.394531 8.332031 8.605469 8.332031 8.769531 8.214844 L 15.84375 3.054688 L 15.84375 11.882812 C 15.84375 12.507812 15.351562 13.023438 14.75 13.023438 L 2.25 13.023438 C 1.648438 13.023438 1.15625 12.507812 1.15625 11.882812 Z M 1.59375 13.886719 C 0.785156 13.6875 0.183594 12.933594 0.183594 12.042969 L 0.183594 1.960938 C 0.183594 1.960938 0.183594 1.957031 0.183594 1.953125 C 0.183594 1.0625 0.789062 0.3125 1.59375 0.113281 C 1.800781 0.0390625 2.019531 0 2.25 0 L 14.75 0 C 14.980469 0 15.199219 0.0390625 15.40625 0.113281 C 16.210938 0.308594 16.816406 1.0625 16.816406 1.957031 L 16.816406 12.042969 C 16.816406 12.933594 16.210938 13.691406 15.40625 13.886719 C 15.199219 13.960938 14.980469 14 14.75 14 L 2.25 14 C 2.019531 14 1.800781 13.960938 1.59375 13.886719 Z M 8.5 7.21875 L 1.179688 1.878906 C 1.285156 1.367188 1.726562 0.976562 2.25 0.976562 L 14.75 0.976562 C 15.273438 0.976562 15.714844 1.367188 15.820312 1.878906 Z M 8.5 7.21875 "/>
              </g>
            </svg>
          </div>
          <div class="error-mess d-flex" v-if="$v.registerID.$error">
            <span v-if="!$v.registerID.required">Email is required.</span>
            <span v-if="!$v.registerID.email">Must be valid e-mail.</span>
          </div>
          <div class="form-group" :class="[$v.password.$error ? 'error' : '' ]">
            <input v-model.trim="$v.password.$model" :type="[passwordFieldType ? 'password' : 'text']" class="form-control" id="password" placeholder="Input password">
            <svg class="icon-auth" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.625 8.15625H5.83594V4.21875C5.83594 3.67559 6.27715 3.23438 6.82031 3.23438H11.1797C11.7229 3.23438 12.1641 3.67559 12.1641 4.21875V5.41406C12.1641 5.49141 12.2273 5.55469 12.3047 5.55469H13.2891C13.3664 5.55469 13.4297 5.49141 13.4297 5.41406V4.21875C13.4297 2.97598 12.4225 1.96875 11.1797 1.96875H6.82031C5.57754 1.96875 4.57031 2.97598 4.57031 4.21875V8.15625H3.375C3.06387 8.15625 2.8125 8.40762 2.8125 8.71875V15.4688C2.8125 15.7799 3.06387 16.0312 3.375 16.0312H14.625C14.9361 16.0312 15.1875 15.7799 15.1875 15.4688V8.71875C15.1875 8.40762 14.9361 8.15625 14.625 8.15625ZM13.9219 14.7656H4.07812V9.42188H13.9219V14.7656ZM8.50781 12.3223V13.2539C8.50781 13.3313 8.57109 13.3945 8.64844 13.3945H9.35156C9.42891 13.3945 9.49219 13.3313 9.49219 13.2539V12.3223C9.63729 12.2181 9.74559 12.0706 9.80151 11.9009C9.85743 11.7313 9.85807 11.5482 9.80335 11.3782C9.74863 11.2082 9.64137 11.0599 9.49701 10.9547C9.35265 10.8495 9.17863 10.7928 9 10.7928C8.82137 10.7928 8.64735 10.8495 8.50299 10.9547C8.35863 11.0599 8.25137 11.2082 8.19665 11.3782C8.14193 11.5482 8.14257 11.7313 8.19849 11.9009C8.25441 12.0706 8.36271 12.2181 8.50781 12.3223Z" fill="#262626"/>
            </svg> 
            <i @click="passwordFieldType = !passwordFieldType" class="icon-password" v-bind:class="[passwordFieldType ? 'eyes-close': 'eyes-open' ]"></i>  
          </div>
          <div class="error-mess d-flex" v-if="$v.password.$error">
            <span v-if="!$v.password.required">Password is required.</span>
            <span v-if="!$v.password.minLength">Password must have at least 5 characters.</span>
          </div>
          <div class="form-group" :class="[$v.passwordConfirm.$error ? 'error' : '' ]">
            <input v-model.trim="$v.passwordConfirm.$model" :type="[passwordConfirmFieldType ? 'password' : 'text']" class="form-control" id="confirm_password" placeholder="Input confirm password">
            <svg class="icon-auth" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.625 8.15625H5.83594V4.21875C5.83594 3.67559 6.27715 3.23438 6.82031 3.23438H11.1797C11.7229 3.23438 12.1641 3.67559 12.1641 4.21875V5.41406C12.1641 5.49141 12.2273 5.55469 12.3047 5.55469H13.2891C13.3664 5.55469 13.4297 5.49141 13.4297 5.41406V4.21875C13.4297 2.97598 12.4225 1.96875 11.1797 1.96875H6.82031C5.57754 1.96875 4.57031 2.97598 4.57031 4.21875V8.15625H3.375C3.06387 8.15625 2.8125 8.40762 2.8125 8.71875V15.4688C2.8125 15.7799 3.06387 16.0312 3.375 16.0312H14.625C14.9361 16.0312 15.1875 15.7799 15.1875 15.4688V8.71875C15.1875 8.40762 14.9361 8.15625 14.625 8.15625ZM13.9219 14.7656H4.07812V9.42188H13.9219V14.7656ZM8.50781 12.3223V13.2539C8.50781 13.3313 8.57109 13.3945 8.64844 13.3945H9.35156C9.42891 13.3945 9.49219 13.3313 9.49219 13.2539V12.3223C9.63729 12.2181 9.74559 12.0706 9.80151 11.9009C9.85743 11.7313 9.85807 11.5482 9.80335 11.3782C9.74863 11.2082 9.64137 11.0599 9.49701 10.9547C9.35265 10.8495 9.17863 10.7928 9 10.7928C8.82137 10.7928 8.64735 10.8495 8.50299 10.9547C8.35863 11.0599 8.25137 11.2082 8.19665 11.3782C8.14193 11.5482 8.14257 11.7313 8.19849 11.9009C8.25441 12.0706 8.36271 12.2181 8.50781 12.3223Z" fill="#262626"/>
            </svg> 
            <i @click="[passwordConfirmFieldType = !passwordConfirmFieldType]" class="icon-password" v-bind:class="[passwordConfirmFieldType ? 'eyes-close': 'eyes-open' ]"></i>
          </div>
          <div class="error-mess d-flex" v-if="$v.passwordConfirm.$error">
            <span v-if="!$v.passwordConfirm.samAsPassword">Password must be identical</span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <router-link to="/login">Login</router-link>
            <button id="btn-submit" type="submit" class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </section>
  </main> 
</template>

<script>

import {userService} from "../services/user.service"

import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  name: "Register",
  data() {
    return {
        fullname: '',
        registerID: '',
        password:'',
        passwordFieldType: true,
        passwordConfirmFieldType: true,
        passwordConfirm: '',
    }
  },
  validations: {
    fullname: {
      required,
      minLength: minLength(5)
    },
    registerID : {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(5)
    },
    passwordConfirm: {
      samAsPassword: sameAs('password')
    }
  },
  methods: {
    handleRegister() {
      
      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }
      let user = {
        name: this.name,
        email: this.registerID,
        password: this.password
      }
      if (userService.add(user)) {
        this.$alert("Your account has been created successfully, Please back to Login!", "", "success")
        .then(() => {
          this.$router.push( { name : "Login" } );   
         });
      }
    },
  }
};
</script>

