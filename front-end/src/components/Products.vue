<template>
  <div class="card" style="width: 200px;">
      <img class="card-img-top" :src="'http://localhost:8080/'+props.product.image_url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{props.product.title}}</h5>
        <p class="card-text">&#36;{{props.product.price}}</p>
        <RouterLink :to="'/Details/'+props.product.id" ><button type="button" class="btn btn-dark">View Details</button></RouterLink>
      </div>
    </div>
</template>

<script setup>
const props = defineProps(['product']);
</script>

<style>
input[type="number"]{
  text-align: center;
}
.card{
    text-align: center;
}
button{
    width: 100%;
}
</style>