import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/counter',
      name: 'CounterView',
      component: () => import('../views/CounterView.vue'),
    },
    {
      path: '/pokemons',
      name: 'PokemonsView',
      component: () => import('../views/PokemonsView.vue'),
    },
    {
      path: '/pokemon/:id',
      name: 'PokemonView',
      component: () => import('../views/PokemonView.vue'),
    },
  ],
})

export default router
