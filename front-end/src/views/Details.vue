<template>
  <div class="container">
    <div class="img">
      <img :src="'http://localhost:8080/'+product.image_url"/>  
    </div>
    
    <div class="name">
        <h1>{{product.title}}</h1>
        <h3>${{product.price}}</h3>
    </div>
    <p>Average rating: {{product.rating}}</p>
    <button type="button" :class="[addedToCart ? 'btn-success disabled' : 'btn-dark' ]" class="btn" @click="addProductToCart">{{btnContent}}</button>
    <h2 class="mt-5 mb-2">Description</h2>
    <p>{{product.description}}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import {useShoesStore} from '../stores/shoes.js'
let id = window.location.pathname.split('/')[2]
const shoesStore = useShoesStore()
console.log('id',id)
let product = shoesStore.products.filter((product) => product.id === id)[0]
//
console.log('product : ',product)
const addedToCart = ref(shoesStore.addedProducts.includes(product.id));

const btnContent = computed(() => addedToCart.value ? 'Successfully added item to cart' : 'Add to cart')

const addProductToCart = () => {
    addedToCart.value = true;
    shoesStore.addProductToCart(id)
}

</script>

<style>
.container{
    padding: 30px 0;
}
.img{
    margin: 100px auto;
    text-align: center;
}
.name{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>