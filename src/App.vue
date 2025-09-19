<script setup lang="ts"></script>

<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/Header.vue'
import AppFooter from '@/components/layout/Footer.vue'
</script>
