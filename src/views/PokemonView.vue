<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Pokemon } from '../types/Pokemon'

const route = useRoute()
const id = route.params.id

const pokemon = ref<Pokemon | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const fetchPokemon = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    pokemon.value = data
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPokemon()
})
</script>

<template>
  <h1>Pokemon</h1>

  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>Pokemon</div>
</template>
