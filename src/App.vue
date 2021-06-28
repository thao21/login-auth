<template>
  <div>
    <router-view />
  </div>
</template>

<script>

import Auth from "./services/auth";
import CONFIG from "./config";

export default {
  name: "App",
  created() {
    
    let self = this;
    setInterval(() => {
      let token = localStorage.getItem(CONFIG.JWT_TOKEN_KEY);
      if (token !== null && !Auth.verify(token)) {
        self.$store.dispatch("logout")
        .then(() => {
          self.$router.push("/login");
        });
      }
    }, 60000);
  },
};
</script>
<style scope>
@import "./assets/css/style.css";
</style>