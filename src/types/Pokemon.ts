// Core Pokemon interface for PokeAPI.co
interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  weight: number
  is_default: boolean
  order: number
  location_area_encounters: string
  abilities: PokemonAbility[]
  forms: NamedAPIResource[]
  game_indices: GameIndex[]
  held_items: PokemonHeldItem[]
  moves: PokemonMove[]
  past_abilities: PastAbility[]
  past_types: PastType[]
  species: NamedAPIResource
  sprites: PokemonSprites
  stats: PokemonStat[]
  types: PokemonType[]
  cries: PokemonCries
}

// Ability-related interfaces
interface PokemonAbility {
  ability: NamedAPIResource
  is_hidden: boolean
  slot: number
}

interface PastAbility {
  abilities: PokemonAbility[]
  generation: NamedAPIResource
}

// Game-related interfaces
interface GameIndex {
  game_index: number
  version: NamedAPIResource
}

// Held items interfaces
interface PokemonHeldItem {
  item: NamedAPIResource
  version_details: HeldItemVersionDetail[]
}

interface HeldItemVersionDetail {
  rarity: number
  version: NamedAPIResource
}

// Move-related interfaces
interface PokemonMove {
  move: NamedAPIResource
  version_group_details: MoveVersionGroupDetail[]
}

interface MoveVersionGroupDetail {
  level_learned_at: number
  move_learn_method: NamedAPIResource
  order: number | null
  version_group: NamedAPIResource
}

// Sprite interfaces
interface PokemonSprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: OtherSprites
  versions: SpriteVersions
}

interface OtherSprites {
  dream_world: DreamWorldSprites
  home: HomeSprites
  'official-artwork': OfficialArtworkSprites
  showdown: ShowdownSprites
}

interface DreamWorldSprites {
  front_default: string | null
  front_female: string | null
}

interface HomeSprites {
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

interface OfficialArtworkSprites {
  front_default: string | null
  front_shiny: string | null
}

interface ShowdownSprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

interface SpriteVersions {
  'generation-i': GenerationISprites
  'generation-ii': GenerationIISprites
  'generation-iii': GenerationIIISprites
  'generation-iv': GenerationIVSprites
  'generation-v': GenerationVSprites
  'generation-vi': GenerationVISprites
  'generation-vii': GenerationVIISprites
  'generation-viii': GenerationVIIISprites
}

interface GenerationISprites {
  'red-blue': RedBlueSprites
  yellow: YellowSprites
}

interface RedBlueSprites {
  back_default: string | null
  back_gray: string | null
  back_transparent: string | null
  front_default: string | null
  front_gray: string | null
  front_transparent: string | null
}

interface YellowSprites {
  back_default: string | null
  back_gray: string | null
  back_transparent: string | null
  front_default: string | null
  front_gray: string | null
  front_transparent: string | null
}

interface GenerationIISprites {
  crystal: CrystalSprites
  gold: GoldSilverSprites
  silver: GoldSilverSprites
}

interface CrystalSprites {
  back_default: string | null
  back_shiny: string | null
  back_shiny_transparent: string | null
  back_transparent: string | null
  front_default: string | null
  front_shiny: string | null
  front_shiny_transparent: string | null
  front_transparent: string | null
}

interface GoldSilverSprites {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
  front_transparent: string | null
}

interface GenerationIIISprites {
  emerald: EmeraldSprites
  'firered-leafgreen': FireRedLeafGreenSprites
  'ruby-sapphire': RubySapphireSprites
}

interface EmeraldSprites {
  front_default: string | null
  front_shiny: string | null
}

interface FireRedLeafGreenSprites {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
}

interface RubySapphireSprites {
  back_default: string | null
  back_shiny: string | null
  front_default: string | null
  front_shiny: string | null
}

interface GenerationIVSprites {
  'diamond-pearl': DiamondPearlPlatinumSprites
  'heartgold-soulsilver': DiamondPearlPlatinumSprites
  platinum: DiamondPearlPlatinumSprites
}

interface DiamondPearlPlatinumSprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

interface GenerationVSprites {
  'black-white': BlackWhiteSprites
}

interface BlackWhiteSprites {
  animated: AnimatedSprites
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

interface AnimatedSprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

interface GenerationVISprites {
  'omegaruby-alphasapphire': GenerationVIBasicSprites
  'x-y': GenerationVIBasicSprites
}

interface GenerationVIBasicSprites {
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

interface GenerationVIISprites {
  icons: IconSprites
  'ultra-sun-ultra-moon': GenerationVIBasicSprites
}

interface GenerationVIIISprites {
  icons: IconSprites
}

interface IconSprites {
  front_default: string | null
  front_female: string | null
}

// Stats interfaces
interface PokemonStat {
  base_stat: number
  effort: number
  stat: NamedAPIResource
}

// Type interfaces
interface PokemonType {
  slot: number
  type: NamedAPIResource
}

interface PastType {
  generation: NamedAPIResource
  types: PokemonType[]
}

// Audio interfaces
interface PokemonCries {
  latest: string
  legacy: string
}

// Common utility interfaces
interface NamedAPIResource {
  name: string
  url: string
}

// Export the main interface
export type {
  Pokemon,
  PokemonAbility,
  PokemonMove,
  PokemonSprites,
  PokemonStat,
  PokemonType,
  NamedAPIResource,
}
