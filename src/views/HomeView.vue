<script setup lang="ts">
import { useCatchedPokemonStore } from '@/stores/catched-pokemon'

const catchedPokemonStore = useCatchedPokemonStore()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>

      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div class="text-center">
          <!-- Main Title -->
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span
              class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Pokemon
            </span>
            <br />
            <span class="text-gray-800">Playground</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover, catch, and manage your favorite Pokemon in this modern web application. Start
            your journey as a Pokemon trainer today!
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <router-link
              to="/pokemons"
              class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              <span class="mr-3 text-2xl">🔍</span>
              Explore Pokemon
            </router-link>

            <router-link
              v-if="catchedPokemonStore.name"
              to="/catched-pokemon"
              class="bg-white text-gray-800 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:border-blue-400 flex items-center"
            >
              <span class="mr-3 text-2xl">🎮</span>
              My Pokemon
            </router-link>
          </div>

          <!-- Pokemon Status Card (if user has caught one) -->
          <div
            v-if="catchedPokemonStore.name"
            class="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 mb-16"
          >
            <div class="text-center">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Your Current Pokemon</h3>
              <div class="flex items-center justify-center mb-4">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mr-4"
                >
                  <span class="text-2xl">🎯</span>
                </div>
                <div class="text-left">
                  <p class="text-xl font-bold capitalize text-gray-800">
                    {{ catchedPokemonStore.name }}
                  </p>
                  <p class="text-sm text-gray-600">Level {{ catchedPokemonStore.level }}</p>
                </div>
              </div>
              <router-link
                to="/catched-pokemon"
                class="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View Details →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-16 bg-white/50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Features</h2>
          <p class="text-xl text-gray-600">Everything you need for your Pokemon adventure</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1: Discover -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6"
            >
              <span class="text-3xl">🔍</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Discover Pokemon</h3>
            <p class="text-gray-600 mb-6">
              Browse through hundreds of Pokemon with detailed information, stats, and beautiful
              images.
            </p>
            <router-link
              to="/pokemons"
              class="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              Start Exploring →
            </router-link>
          </div>

          <!-- Feature 2: Catch -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6"
            >
              <span class="text-3xl">🎯</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Catch Pokemon</h3>
            <p class="text-gray-600 mb-6">
              Catch your favorite Pokemon and add them to your collection. Each Pokemon starts at
              level 1.
            </p>
            <router-link
              to="/pokemons"
              class="text-purple-600 hover:text-purple-800 font-semibold transition-colors"
            >
              Catch Pokemon →
            </router-link>
          </div>

          <!-- Feature 3: Manage -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6"
            >
              <span class="text-3xl">🎮</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Manage & Train</h3>
            <p class="text-gray-600 mb-6">
              Level up your Pokemon, view their stats, and manage your collection with an intuitive
              interface.
            </p>
            <router-link
              to="/catched-pokemon"
              class="text-green-600 hover:text-green-800 font-semibold transition-colors"
            >
              Manage Pokemon →
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-4">Ready to Start?</h2>
        <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands of trainers in the ultimate Pokemon experience. Discover, catch, and train
          your way to becoming a Pokemon master!
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">1000+</div>
            <div class="text-blue-100">Pokemon Available</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">∞</div>
            <div class="text-blue-100">Adventures Await</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">24/7</div>
            <div class="text-blue-100">Always Available</div>
          </div>
        </div>

        <router-link
          to="/pokemons"
          class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
        >
          <span class="mr-3 text-2xl">🚀</span>
          Begin Your Journey
        </router-link>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <div class="mb-8">
          <h3 class="text-2xl font-bold mb-4">Pokemon Playground</h3>
          <p class="text-gray-400 max-w-2xl mx-auto">
            A modern web application for Pokemon enthusiasts. Built with Vue 3, TypeScript, and
            Tailwind CSS.
          </p>
        </div>

        <div class="flex justify-center space-x-8 mb-8">
          <router-link to="/" class="text-gray-400 hover:text-white transition-colors"
            >Home</router-link
          >
          <router-link to="/pokemons" class="text-gray-400 hover:text-white transition-colors"
            >Pokemon</router-link
          >
          <router-link
            to="/catched-pokemon"
            class="text-gray-400 hover:text-white transition-colors"
            >My Collection</router-link
          >
        </div>

        <div class="border-t border-gray-800 pt-8">
          <p class="text-gray-500">© 2024 Pokemon Playground. Built with ❤️ for Pokemon fans.</p>
        </div>
      </div>
    </div>
  </div>
</template>
