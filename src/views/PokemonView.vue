<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCatchedPokemonStore } from '../stores/catched-pokemon'
import type { Pokemon } from '../types/Pokemon'
import type { CatchedPokemon } from '../types/CatchedPokemon'

const route = useRoute()
const router = useRouter()
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

// Computed properties for better data presentation
const typeColors = computed(() => {
  const colors: Record<string, string> = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-300',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-green-400',
    rock: 'bg-yellow-800',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-800',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300',
  }
  return pokemon.value?.types.map((type) => colors[type.type.name] || 'bg-gray-400') || []
})

const formatHeight = computed(() => {
  if (!pokemon.value) return ''
  const heightInMeters = pokemon.value.height / 10
  return `${heightInMeters} m`
})

const formatWeight = computed(() => {
  if (!pokemon.value) return ''
  const weightInKg = pokemon.value.weight / 10
  return `${weightInKg} kg`
})

const pokemonImageSrc = computed(() => {
  if (!pokemon.value) return undefined
  return (
    pokemon.value.sprites.other?.['official-artwork']?.front_default ||
    pokemon.value.sprites.front_default ||
    undefined
  )
})

const catchedPokemonStore = useCatchedPokemonStore()

const catchPokemon = () => {
  if (!pokemon.value) return

  const catchedPokemon: CatchedPokemon = {
    name: pokemon.value.name,
    level: 1,
    image: pokemonImageSrc.value || '/favicon.ico',
    hp: pokemon.value.stats[0].base_stat,
    attack: pokemon.value.stats[1].base_stat,
    defense: pokemon.value.stats[2].base_stat,
    special_attack: pokemon.value.stats[3].base_stat,
    special_defense: pokemon.value.stats[4].base_stat,
    speed: pokemon.value.stats[5].base_stat,
  }

  catchedPokemonStore.addCatchedPokemon(catchedPokemon)
  router.push('/catched-pokemon')
}

const goBack = () => {
  router.push('/pokemons')
}

onMounted(() => {
  fetchPokemon()
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <!-- Back Button -->
    <div class="container mx-auto px-6 pt-8 flex justify-between mb-6">
      <button
        @click="goBack"
        class="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200 cursor-pointer"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Back to Pokemon List
      </button>
      <button
        class="bg-indigo-600 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
        @click="catchPokemon"
      >
        Catch
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-32">
      <div class="relative">
        <div
          class="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"
        ></div>
      </div>
      <p class="mt-6 text-xl text-gray-600 font-medium">Loading Pokemon details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="container mx-auto px-6 py-20">
      <div class="max-w-md mx-auto">
        <div class="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <div
            class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-red-800 mb-3">Pokemon Not Found</h3>
          <p class="text-red-600 mb-6">{{ error }}</p>
          <button
            @click="goBack"
            class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>

    <!-- Pokemon Details -->
    <div v-else class="container mx-auto px-6 pb-12">
      <!-- Hero Section -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
        <div
          class="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 px-8 py-12 text-white text-center relative"
        >
          <div class="absolute inset-0 bg-black/10"></div>
          <div class="relative">
            <h1 class="text-4xl md:text-6xl font-extrabold capitalize mb-4">
              {{ pokemon?.name }}
            </h1>
            <div class="flex justify-center gap-3 mb-6">
              <span
                v-for="(type, index) in pokemon?.types"
                :key="type.type.name"
                :class="typeColors[index]"
                class="px-4 py-2 rounded-full text-white font-semibold text-sm uppercase tracking-wide shadow-lg"
              >
                {{ type.type.name }}
              </span>
            </div>
            <p class="text-indigo-100 text-lg">#{{ pokemon?.id.toString().padStart(3, '0') }}</p>
          </div>
        </div>

        <!-- Pokemon Image and Basic Info -->
        <div class="p-8">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Pokemon Image -->
            <div class="text-center">
              <div class="relative inline-block">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-50"
                ></div>
                <img
                  :src="pokemonImageSrc"
                  :alt="pokemon?.name"
                  class="relative w-64 h-64 object-contain mx-auto drop-shadow-2xl"
                />
              </div>
            </div>

            <!-- Basic Info -->
            <div class="space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <div
                  class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl text-center"
                >
                  <div class="text-3xl font-bold text-indigo-600 mb-2">{{ formatHeight }}</div>
                  <div class="text-gray-600 font-medium">Height</div>
                </div>
                <div
                  class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center"
                >
                  <div class="text-3xl font-bold text-purple-600 mb-2">{{ formatWeight }}</div>
                  <div class="text-gray-600 font-medium">Weight</div>
                </div>
              </div>

              <!-- Abilities -->
              <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <h3 class="text-lg font-bold text-gray-800 mb-4">Abilities</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="ability in pokemon?.abilities"
                    :key="ability.ability.name"
                    class="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium capitalize"
                  >
                    {{ ability.ability.name.replace('-', ' ') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-white rounded-3xl shadow-xl p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">Base Stats</h2>
        <div class="space-y-6">
          <div v-for="stat in pokemon?.stats" :key="stat.stat.name" class="flex items-center gap-4">
            <div class="w-32 text-right">
              <span class="text-sm font-medium text-gray-600 capitalize">
                {{ stat.stat.name.replace('-', ' ') }}
              </span>
            </div>
            <div class="flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
              <div
                :style="{ width: `${Math.min((stat.base_stat / 255) * 100, 100)}%` }"
                class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
              ></div>
            </div>
            <div class="w-12 text-left">
              <span class="text-lg font-bold text-gray-800">{{ stat.base_stat }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Moves Section -->
      <div class="bg-white rounded-3xl shadow-xl p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">Notable Moves</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="move in pokemon?.moves.slice(0, 12)"
            :key="move.move.name"
            class="bg-gradient-to-br from-gray-50 to-slate-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <span class="text-sm font-medium text-gray-700 capitalize">
              {{ move.move.name.replace('-', ' ') }}
            </span>
          </div>
        </div>
        <div v-if="pokemon && pokemon.moves.length > 12" class="text-center mt-6">
          <p class="text-gray-500">And {{ pokemon.moves.length - 12 }} more moves...</p>
        </div>
      </div>
    </div>
  </div>
</template>
