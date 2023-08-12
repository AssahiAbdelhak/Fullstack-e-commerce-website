<script setup>

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="logo">fabulous footwear</RouterLink>
      <RouterLink to="/cart" ><button type="button" class="btn btn-dark">Shopping Cart</button></RouterLink>
    </nav>
  </header>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>
nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.5);
}
nav a{
  text-decoration: none;
}
nav button{
  font-weight: 600;
}
nav .logo{
  text-transform: uppercase;
  font-size: 40px;
  color: #212529;
  font-weight: 600;
}
</style>
