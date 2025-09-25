import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CatchedPokemon } from '../types/CatchedPokemon'

export const useCatchedPokemonStore = defineStore('catchedPokemon', () => {
  const name = ref<string | null>(null)
  const level = ref<number | null>(null)
  const image = ref<string | null>(null)
  const hp = ref<number | null>(null)
  const attack = ref<number | null>(null)
  const defense = ref<number | null>(null)
  const special_attack = ref<number | null>(null)
  const special_defense = ref<number | null>(null)
  const speed = ref<number | null>(null)
  const currentHp = computed(() => (hp.value && level.value ? hp.value + level.value : hp.value))
  const currentAttack = computed(() =>
    attack.value && level.value ? attack.value + level.value : attack.value,
  )
  const currentDefense = computed(() =>
    defense.value && level.value ? defense.value + level.value : defense.value,
  )
  const currentSpecialAttack = computed(() =>
    special_attack.value && level.value ? special_attack.value + level.value : special_attack.value,
  )
  const currentSpecialDefense = computed(() =>
    special_defense.value && level.value
      ? special_defense.value + level.value
      : special_defense.value,
  )
  const currentSpeed = computed(() =>
    speed.value && level.value ? speed.value + level.value : speed.value,
  )

  function addCatchedPokemon(pokemon: CatchedPokemon) {
    name.value = pokemon.name
    level.value = pokemon.level
    image.value = pokemon.image
    hp.value = pokemon.hp
    attack.value = pokemon.attack
    defense.value = pokemon.defense
    special_attack.value = pokemon.special_attack
    special_defense.value = pokemon.special_defense
    speed.value = pokemon.speed
  }

  function removeCatchedPokemon() {
    name.value = null
    level.value = null
    image.value = null
    hp.value = null
    attack.value = null
    defense.value = null
    special_attack.value = null
    special_defense.value = null
    speed.value = null
  }

  function levelUp() {
    if (level.value) {
      level.value++
    }
  }

  function levelDown() {
    if (level.value) {
      level.value--
    }
  }

  return {
    name,
    level,
    image,
    currentHp,
    currentAttack,
    currentDefense,
    currentSpecialAttack,
    currentSpecialDefense,
    currentSpeed,
    addCatchedPokemon,
    removeCatchedPokemon,
    levelUp,
    levelDown,
  }
})
