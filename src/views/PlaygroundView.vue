<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Pokemon } from '@/types/Pokemon'
import {
  Loader2,
  AlertCircle,
  RefreshCw,
  Search,
  Zap,
  ChevronDown,
  ChevronUp,
} from 'lucide-vue-next'

const showPokemon = ref<boolean>(false)

const allPokemon = ref<Pokemon[] | null>(null)
const isLoading = ref<boolean>(false)
const error = ref<string | null>(null)

const getPokemon = async () => {
  isLoading.value = true
  error.value = null

  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    allPokemon.value = data.results
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
    console.error('Error fetching Pokemon:', err)
  } finally {
    isLoading.value = false
  }
}

const toggleShowPokemon = () => {
  showPokemon.value = !showPokemon.value
}

onMounted(() => {
  getPokemon()
})
</script>

<template>
  <div class="flex flex-col gap-6 p-6">
    <button
      @click="toggleShowPokemon"
      class="py-1 px-2 bg-blue-900 text-white rounded w-fit flex gap-2 items-center"
    >
      <span>Show Pokemon</span>
      <ChevronUp v-if="showPokemon" class="w-4 h-4 text-white" />
      <ChevronDown v-if="!showPokemon" class="w-4 h-4 text-white" />
    </button>
    <div v-if="showPokemon">
      <h1 class="text-3xl font-bold mb-6 flex items-center gap-2">
        <Zap class="w-8 h-8 text-yellow-500" />
        Pokemon API
      </h1>

      <div v-if="isLoading" class="text-center">
        <div class="flex items-center justify-center gap-2 mb-2">
          <Loader2 class="w-6 h-6 animate-spin text-blue-500" />
          <p class="text-lg">Loading Pokemon...</p>
        </div>
      </div>

      <div v-else-if="error" class="text-red-500 text-center">
        <div class="flex items-center justify-center gap-2 mb-4">
          <AlertCircle class="w-6 h-6" />
          <p class="text-lg">Error: {{ error }}</p>
        </div>
        <button
          @click="getPokemon"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 mx-auto"
        >
          <RefreshCw class="w-4 h-4" />
          Retry
        </button>
      </div>

      <div v-else-if="allPokemon && allPokemon.length > 0">
        <div class="flex items-center gap-2 mb-4 text-gray-600">
          <Search class="w-5 h-5" />
          <p>Found {{ allPokemon.length }} Pokemon:</p>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <li
            v-for="(pokemon, index) in allPokemon"
            :key="pokemon.name"
            class="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors capitalize"
          >
            {{ index + 1 }}. {{ pokemon.name }}
          </li>
        </ul>
      </div>

      <div v-else class="text-center text-gray-500">
        <p class="text-lg">No Pokemon found.</p>
      </div>
    </div>
  </div>
</template>
