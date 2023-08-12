<script setup>
import { computed, ref } from 'vue'
import  CartProduct from '../components/CartProduct.vue'
import {useShoesStore} from '../stores/shoes.js'

const shoesStore = useShoesStore()

let list = shoesStore.products.filter((prod) => shoesStore.addedProducts.includes(prod.id))
console.log(shoesStore.getPrice)
console.log(shoesStore.addedProducts)
</script>

<template>
<div class="container">
    <div class="header">
        <h1>Shopping Cart</h1>
    </div>
    <CartProduct  v-for="product in list" :product="product" :key="product.key"/>
    <h1 class="price">Total: ${{shoesStore.getPrice}}</h1>
    <button type="button" class="btn btn-dark" >Proceed to Checkout</button>
</div>
</template>

<style scoped>
.container{
    width: 800px;
}
@media screen and (max-width : 800px) {
    .container{
        width: 80vw;
    }
}
.header{
    font-weight: 500;
    margin: 40px 0 0 0;
    padding: 5px;
    border-bottom: 3px solid;
    width: 100%;
}
h1.price{
    margin: 40px 0;
    text-align: end;
}

</style>