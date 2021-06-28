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

export default {
  name: "TheNavBar",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {

    handleLogout() {
      this.$store.dispatch('logout')
       .then(() => {
         this.$router.push('/login')
       })
       .catch(err => {
         console.log(err)
       })
    },
    handleRegister() {
      this.$router.push("/register");
    },    
  },
};
</script>
