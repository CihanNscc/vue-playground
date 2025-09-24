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
  <h1>Pokemons</h1>

  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        <router-link :to="`/pokemon/${pokemon.name}`">{{ pokemon.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
