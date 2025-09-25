<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Modern Header with Gradient Background -->
  <header
    class="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white shadow-lg"
  >
    <div class="absolute inset-0 bg-black/10"></div>
    <div class="relative container mx-auto px-6 py-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          <span
            class="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
          >
            Vue Pokemon
          </span>
          <span class="text-white">App</span>
        </h1>
        <p class="text-indigo-100 text-lg font-medium">Discover and explore the world of Pokemon</p>
      </div>
    </div>
  </header>

  <!-- Modern Navigation -->
  <nav class="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <div class="container mx-auto px-6">
      <div class="flex justify-center space-x-1 py-4">
        <RouterLink
          to="/"
          class="group relative px-6 py-3 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-indigo-600 hover:bg-indigo-50"
        >
          <span class="relative z-10">Home</span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          ></div>
        </RouterLink>

        <RouterLink
          to="/catched-pokemon"
          class="group relative px-6 py-3 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-indigo-600 hover:bg-indigo-50"
        >
          <span class="relative z-10">Your Pokemon</span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          ></div>
        </RouterLink>

        <RouterLink
          to="/pokemons"
          class="group relative px-6 py-3 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-indigo-600 hover:bg-indigo-50"
        >
          <span class="relative z-10">Explore Pokemon</span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          ></div>
        </RouterLink>

        <RouterLink
          to="/pg"
          class="group relative px-6 py-3 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-indigo-600 hover:bg-indigo-50"
        >
          <span class="relative z-10">Playground</span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          ></div>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
