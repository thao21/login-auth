<template>
  <section class="warehouse-wrapper">
      <form id="table-user">
        <div class="table-header">
          <the-nav-bar />
        </div>
        <div class="table-content">
          <div class="container-fluid">
            <product-list />
            <the-footer-bar />
          </div>
        </div>
      </form>
  </section>
</template>

<script>
import TheNavBar from '../components/TheNavBar.vue';
import ProductList from '../components/ProductList.vue';
import TheFooterBar from '../components/TheFooterBar.vue';

export default {
  name: "Home",
  components: {
    TheNavBar,
    ProductList,
    TheFooterBar,
  },
};
</script>
