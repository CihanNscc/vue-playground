<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Pokemon } from '../types/Pokemon'

const pokemons = ref<Pokemon[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const fetchPokemons = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()
    pokemons.value = data.results
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPokemons()
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div class="container mx-auto px-6 py-12">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Pokemon
          </span>
          <span class="text-gray-800">Collection</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover all 151 original Pokemon from the Kanto region
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-20">
        <div class="relative">
          <div class="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
        <p class="mt-4 text-lg text-gray-600 font-medium">Loading Pokemon...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="max-w-md mx-auto">
        <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-red-800 mb-2">Oops! Something went wrong</h3>
          <p class="text-red-600">{{ error }}</p>
        </div>
      </div>

      <!-- Pokemon Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <router-link
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          :to="`/pokemon/${pokemon.name}`"
          class="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
        >
          <!-- Card Background Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Card Content -->
          <div class="relative p-6 text-center">
            <!-- Pokemon Icon Placeholder -->
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl font-bold text-white">
                {{ pokemon.name.charAt(0).toUpperCase() }}
              </span>
            </div>

            <!-- Pokemon Name -->
            <h3 class="text-lg font-bold text-gray-800 capitalize mb-2 group-hover:text-indigo-600 transition-colors duration-300">
              {{ pokemon.name }}
            </h3>

            <!-- Hover Arrow -->
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-5 h-5 text-indigo-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>

          <!-- Card Border Glow Effect -->
          <div class="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
        </router-link>
      </div>

      <!-- Footer Info -->
      <div class="text-center mt-16 py-8">
        <p class="text-gray-500">
          Showing {{ pokemons.length }} Pokemon from the original 151
        </p>
      </div>
    </div>
  </div>
</template>
