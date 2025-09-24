<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="text-center bg-blue-600 text-white py-4">
    <h1 class="text-3xl font-bold">Vue Pokemon App</h1>
    <p class="text-red-500 text-xl">Test Tailwind (should be red and large)</p>
  </header>
  <nav class="flex justify-around bg-gray-100 py-2">
    <RouterLink to="/" class="px-16 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
      >Home</RouterLink
    >
    <RouterLink
      to="/utils"
      class="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
      >Utils</RouterLink
    >
    <RouterLink
      to="/pokemons"
      class="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
      >Pokemons</RouterLink
    >
  </nav>
</template>
