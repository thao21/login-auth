<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <div class="tab-title d-flex">
          <div class="tab">
            <span class="bg-gray"></span>
          </div> 
          <div class="tab active">Warehouse</div>
        </div>
        <a v-if="isLoggedIn" href="javascript:void(0)" @click="handleLogout">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'

export default {
  name: "NavBar",
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn;
    },
    ...mapGetters(['getLoggedUser']),
    ...mapState({
        name: state => `${state.user.name}`,
      })
  },
  methods: {

    handleLogout() {
      this.$store.dispatch('logout')
       .then(() => {
         this.$router.push( { name : "Login" })
       })
       .catch(err => {
         console.log(err)
       })
    }    
  },
};
</script>
