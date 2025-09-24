<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Pokemon {
  name: string
  url: string
}

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
  <div class="flex flex-col items-center gap-4 p-4">
    <h1 class="text-3xl font-bold">Pokemons</h1>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else class="w-full">
      <ul class="flex flex-col gap-2 w-fit">
        <li
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          class="p-2 bg-violet-800 hover:bg-violet-600 rounded cursor-pointer"
        >
          <router-link :to="`/pokemon/${pokemon.name}`" class="text-white font-bold">{{
            pokemon.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
