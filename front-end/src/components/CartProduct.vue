<template>
    <div class="product">
        <img :src="'http://localhost:8080/'+product.image_url" alt="">  
        <div class="info">
            <h1>{{product.title}}</h1>
            <h3>${{product.price}}</h3>
        </div>
        <button type="button" class="btn btn-dark" @click="removeProduct">Remove From Cart</button>
    </div>
</template>

<script setup>
import {useShoesStore} from '../stores/shoes.js'
const shoesStore = useShoesStore()
const props = defineProps(['product'])
const removeProduct = () => {
    shoesStore.removeProductFromCart(props.product.id)
}
</script>

<style>
.product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.418);
    padding: 20px 0;
}
.product img{
    width: 100px;
}
.product .info{
    padding: 0 10px;
    width: 500px;
}
.product button{
width: 220px;
}
</style>