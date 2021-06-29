<template>
  <section class="warehouse-wrapper">
      <form id="table-user">
        <div class="table-header">
          <nav-bar />
        </div>
        <div class="table-content">
          <div class="container-fluid">
            <span>Page not found!!!</span>
            <footer-bar />
          </div>
        </div>
      </form>
  </section>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import FooterBar from '../components/FooterBar.vue';

export default {
  name: "NotFound",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>
