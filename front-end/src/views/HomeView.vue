<script setup>
import ProductsVue from "../components/Products.vue";
import {useShoesStore} from '../stores/shoes.js'

const shoesStore = useShoesStore()
await shoesStore.fetchAllProducts();
</script>

<template>
  <Suspense>
  <div class="d-flex wrapper flex-wrap .px-4">
    <ProductsVue v-for="product in shoesStore.products" :key="product.id" :product="product" />
  </div>
  </Suspense>
</template>

<style scoped>
.wrapper{
  margin: 30px auto;
  justify-content: center;
  gap: 10px;
}
</style>