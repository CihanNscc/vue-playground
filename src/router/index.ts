import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/counter',
      name: 'Counter',
      component: () => import('../views/Counter.vue'),
    },
    {
      path: '/pokemons',
      name: 'Pokemons',
      component: () => import('../views/Pokemons.vue'),
    },
    {
      path: '/pokemon/:id',
      name: 'Pokemon',
      component: () => import('../views/Pokemon.vue'),
    },
  ],
})

export default router
