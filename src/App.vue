<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
