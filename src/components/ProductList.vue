<template>
<div>
    <h1 class="title">warehouses</h1>
    <div class="content-wrapper bg-white">
      <div class="row">
        <div class="col-md-6 d-flex search-box">
          <input v-model="searchByCode" @keyup="onEnter" type="text" class="search-input" placeholder="Code" />
          <input v-model="searchByName" @keyup="onEnter" type="text" class="search-input" placeholder="Name" />
          <button @click.prevent="searchProduct" class="btn btn-primary search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
        <div class="col-md-6"></div>
      </div>
      <div class="row">
        <div class="col-12">
          <table class="table table-bordered table-data">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" v-bind:key="product.code">
                <td scope="row"> {{ product.code }} </td>
                <td>{{ product.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>
</template>

<script>

import { productService } from '../services/product.service';

export default {
  name: "TProducts",
  data() {
    return {
      products: null,
      searchByCode: null,
      searchByName: null,
    }
  },
  created() {
    this.products = productService.findProducts();
  },
  methods: {

    isEmptyString(str) {
      return str == null || str.trim().length === 0;
    },
    onEnter(e) {
      if (e.keyCode === 13) {
        this.searchProduct();
      }
    },
    searchProduct() {
      let params = {};
      if (!this.isEmptyString(this.searchByName)) {
        params.name = this.searchByName;
      }
      if (!this.isEmptyString(this.searchByCode)) {
        params.code = this.searchByCode;
      }
      this.products = productService.findProducts(params);
    }

  }
};
</script>
