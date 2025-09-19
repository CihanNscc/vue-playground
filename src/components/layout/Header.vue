<template>
  <header>
    <h1>Vue Pokemon App</h1>
  </header>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/counter">Counter</router-link>
    <router-link to="/Pokemons">Pokemons</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  text-align: center;
}

nav {
  display: flex;
  justify-content: space-around;
}
</style>
