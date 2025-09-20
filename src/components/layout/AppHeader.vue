<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Vue Pokemon App</h1>
  </header>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/utils">Utils</RouterLink>
    <RouterLink to="/pokemons">Pokemons</RouterLink>
  </nav>
</template>

<style scoped>
header {
  text-align: center;
}

nav {
  display: flex;
  justify-content: space-around;
}
</style>
