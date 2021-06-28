<template>
  <main class="form-login d-flex justify-content-center align-items-center">
    <section class="login-wrapper">
      <div class="container">
        <form @submit.prevent="handleRegister" class="form-auth">
          <div class="form-group">
            <input v-model="name" type="text" class="form-control" id="name" placeholder="Input your name">
          </div>
          <div class="form-group">
            <input v-model="email" type="email" class="form-control" id="email" placeholder="name@example.com">
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.09 13.423a6.574 6.574 0 00-1.416-2.1 6.602 6.602 0 00-2.1-1.418c-.008-.003-.015-.005-.022-.009A4.359 4.359 0 104.64 6.363c0 1.454.712 2.742 1.807 3.535l-.02.009a6.546 6.546 0 00-2.101 1.417 6.603 6.603 0 00-1.936 4.528.14.14 0 00.14.144h1.056a.14.14 0 00.14-.137 5.24 5.24 0 011.544-3.591A5.238 5.238 0 019 10.723c1.41 0 2.733.548 3.73 1.545a5.24 5.24 0 011.543 3.591.14.14 0 00.14.137h1.055a.142.142 0 00.101-.042.14.14 0 00.04-.102 6.55 6.55 0 00-.519-2.43zM9 9.387A3.004 3.004 0 016.862 8.5a3.004 3.004 0 01-.886-2.138c0-.807.315-1.566.886-2.137A3.004 3.004 0 019 3.34c.806 0 1.566.314 2.137.886.571.571.886 1.33.886 2.137 0 .807-.315 1.566-.886 2.138A3.004 3.004 0 019 9.387z" fill="#262626"/>
            </svg>
          </div>
          <div class="form-group">
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Input password">
          </div>
          <div class="form-group">
            <input v-model="passwordConfirm" type="password" class="form-control" id="password" placeholder="Confirm password">
          </div>
          <button id="btn-submit" type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
    </section>
  </main> 
</template>

<script lang="ts">

import {userService} from "../services/user.service"

export default {
  name: "Register",
  data() {
      return {
          name: '',
          email: '',
          password: '',
          passwordConfirm: ''
      }
  },
  methods: {
    handleRegister() {
        let user = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        if (userService.add(user)) {
          this.$router.push('/login');
        }
      }
  }
};
</script>

