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
  <div class="flex flex-col items-center gap-4 p-4">
    <h1 class="text-3xl font-bold">{{ pokemon?.name }}</h1>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <img :src="pokemon?.sprites.front_default" :alt="pokemon?.name" />
      <p>{{ pokemon?.types[0].type.name }}</p>
      <p>{{ pokemon?.weight }}</p>
      <p>{{ pokemon?.height }}</p>
      <p>{{ pokemon?.abilities[0].ability.name }}</p>
      <p>{{ pokemon?.moves[0].move.name }}</p>
      <p>{{ pokemon?.stats[0].base_stat }}</p>
    </div>
  </div>
</template>
