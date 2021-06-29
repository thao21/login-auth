<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { JWT_TOKEN_KEY } from './config';

import Auth from "./services/auth";

export default {
  name: "App",

  created() {  
    setInterval(() => {
      let token = localStorage.getItem(JWT_TOKEN_KEY);
      if (token != null && !Auth.verify(token)) {
        this.$store.dispatch("logout")
        this.$alert("Your session is exipred!!", "", "warning")
        .then(() => {
          this.$router.push( { name : "Login" } );   
         });
      }
    }, 45000); // check per 45s
  },
};
</script>
<style scope>
@import "./assets/css/style.css";
</style>