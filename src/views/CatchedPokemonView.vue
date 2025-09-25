<script setup lang="ts">
import { useCatchedPokemonStore } from '@/stores/catched-pokemon'

const catchedPokemonStore = useCatchedPokemonStore()

// Helper function to get stat color based on value
const getStatColor = (value: number | null) => {
  if (!value) return 'bg-gray-300'
  if (value >= 80) return 'bg-green-500'
  if (value >= 60) return 'bg-yellow-500'
  if (value >= 40) return 'bg-orange-500'
  return 'bg-red-500'
}

// Helper function to calculate stat percentage for progress bar
const getStatPercentage = (value: number | null) => {
  if (!value) return 0
  return Math.min((value / 100) * 100, 100)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">My Pokemon</h1>
        <p class="text-gray-600">Manage your caught Pokemon</p>
      </div>

      <!-- Pokemon Card or Empty State -->
      <div v-if="catchedPokemonStore.name" class="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <!-- Pokemon Header -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-3xl font-bold capitalize">{{ catchedPokemonStore.name }}</h2>
              <div class="flex items-center mt-2">
                <span class="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  Level {{ catchedPokemonStore.level }}
                </span>
              </div>
            </div>
            <div class="text-right">
              <div class="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                <span class="text-2xl">🎮</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pokemon Image -->
        <div class="flex justify-center py-6 bg-gray-50">
          <div
            class="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg"
          >
            <img
              v-if="catchedPokemonStore.image"
              :src="catchedPokemonStore.image"
              :alt="catchedPokemonStore.name"
              class="w-40 h-40 object-contain"
            />
            <span v-else class="text-6xl">🎯</span>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="p-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Base Stats</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- HP Stat -->
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span class="text-red-500 text-xl mr-2">❤️</span>
                  <span class="font-semibold text-gray-700">HP</span>
                </div>
                <span class="font-bold text-lg text-gray-800">{{
                  catchedPokemonStore.currentHp || 0
                }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div
                  :class="getStatColor(catchedPokemonStore.currentHp)"
                  class="h-3 rounded-full transition-all duration-500"
                  :style="{ width: getStatPercentage(catchedPokemonStore.currentHp) + '%' }"
                ></div>
              </div>
            </div>

            <!-- Attack Stat -->
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span class="text-orange-500 text-xl mr-2">⚔️</span>
                  <span class="font-semibold text-gray-700">Attack</span>
                </div>
                <span class="font-bold text-lg text-gray-800">{{
                  catchedPokemonStore.currentAttack || 0
                }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div
                  :class="getStatColor(catchedPokemonStore.currentAttack)"
                  class="h-3 rounded-full transition-all duration-500"
                  :style="{ width: getStatPercentage(catchedPokemonStore.currentAttack) + '%' }"
                ></div>
              </div>
            </div>

            <!-- Defense Stat -->
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span class="text-blue-500 text-xl mr-2">🛡️</span>
                  <span class="font-semibold text-gray-700">Defense</span>
                </div>
                <span class="font-bold text-lg text-gray-800">{{
                  catchedPokemonStore.currentDefense || 0
                }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div
                  :class="getStatColor(catchedPokemonStore.currentDefense)"
                  class="h-3 rounded-full transition-all duration-500"
                  :style="{ width: getStatPercentage(catchedPokemonStore.currentDefense) + '%' }"
                ></div>
              </div>
            </div>

            <!-- Special Attack Stat -->
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span class="text-purple-500 text-xl mr-2">✨</span>
                  <span class="font-semibold text-gray-700">Sp. Attack</span>
                </div>
                <span class="font-bold text-lg text-gray-800">{{
                  catchedPokemonStore.currentSpecialAttack || 0
                }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div
                  :class="getStatColor(catchedPokemonStore.currentSpecialAttack)"
                  class="h-3 rounded-full transition-all duration-500"
                  :style="{
                    width: getStatPercentage(catchedPokemonStore.currentSpecialAttack) + '%',
                  }"
                ></div>
              </div>
            </div>

            <!-- Special Defense Stat -->
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span class="text-green-500 text-xl mr-2">🔰</span>
                  <span class="font-semibold text-gray-700">Sp. Defense</span>
                </div>
                <span class="font-bold text-lg text-gray-800">{{
                  catchedPokemonStore.currentSpecialDefense || 0
                }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div
                  :class="getStatColor(catchedPokemonStore.currentSpecialDefense)"
                  class="h-3 rounded-full transition-all duration-500"
                  :style="{
                    width: getStatPercentage(catchedPokemonStore.currentSpecialDefense) + '%',
                  }"
                ></div>
              </div>
            </div>

            <!-- Speed Stat -->
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span class="text-yellow-500 text-xl mr-2">⚡</span>
                  <span class="font-semibold text-gray-700">Speed</span>
                </div>
                <span class="font-bold text-lg text-gray-800">{{
                  catchedPokemonStore.currentSpeed || 0
                }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div
                  :class="getStatColor(catchedPokemonStore.currentSpeed)"
                  class="h-3 rounded-full transition-all duration-500"
                  :style="{ width: getStatPercentage(catchedPokemonStore.currentSpeed) + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="p-6 bg-gray-50 border-t">
          <div class="flex flex-wrap gap-4 justify-center">
            <button
              v-if="catchedPokemonStore.level"
              @click="catchedPokemonStore.levelUp"
              class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center"
            >
              <span class="mr-2">📈</span>
              Level Up
            </button>

            <button
              v-if="catchedPokemonStore.level && catchedPokemonStore.level > 1"
              @click="catchedPokemonStore.levelDown"
              class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center"
            >
              <span class="mr-2">📉</span>
              Level Down
            </button>

            <button
              v-if="catchedPokemonStore.name"
              @click="catchedPokemonStore.removeCatchedPokemon"
              class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center"
            >
              <span class="mr-2">🚀</span>
              Release Pokemon
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white rounded-2xl shadow-xl p-12 text-center">
        <div
          class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <span class="text-6xl">🎯</span>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">No Pokemon Caught Yet</h2>
        <p class="text-gray-600 mb-8 max-w-md mx-auto">
          You haven't caught any Pokemon yet. Go explore and catch your first Pokemon to see them
          here!
        </p>
        <router-link
          to="/pokemons"
          class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center"
        >
          <span class="mr-2">🔍</span>
          Find Pokemon
        </router-link>
      </div>
    </div>
  </div>
</template>
