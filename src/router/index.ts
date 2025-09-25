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
      path: '/catched-pokemon',
      name: 'CatchedPokemonView',
      component: () => import('../views/CatchedPokemonView.vue'),
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
    {
      path: '/pg',
      name: 'PlaygroundView',
      component: () => import('../views/PlaygroundView.vue'),
    },
  ],
})

export default router
