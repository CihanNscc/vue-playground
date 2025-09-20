<script setup lang="ts">
import { useGreeting } from '@/composables/useGreeting'

const { firstName, lastName, fullName, greetingMessage, greetUser, clearGreeting } = useGreeting()
</script>

<template>
  <div>
    <h1>👋 User Greeting</h1>

    <div>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" placeholder="Enter your first name" />
    </div>

    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" placeholder="Enter your last name" />
    </div>

    <div><strong>Full Name:</strong> {{ fullName || 'Please enter your name' }}</div>

    <button @click="greetUser" :disabled="!fullName.trim()" type="button">Greet Me! 🎉</button>

    <button @click="clearGreeting" type="button">Clear Greeting</button>

    <div v-if="greetingMessage">
      {{ greetingMessage }}
    </div>
  </div>
</template>
