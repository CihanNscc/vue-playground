import { computed, ref } from 'vue'

export function useGreeting() {
  const firstName = ref<string>('')
  const lastName = ref<string>('')
  const greetingMessage = ref<string>('')

  const fullName = computed<string>(() => {
    return `${firstName.value} ${lastName.value}`.trim()
  })

  const greetingText: string = 'Hello, {name}! Welcome! 😊'

  const greetUser = (): void => {
    if (fullName.value.trim()) {
      greetingMessage.value = greetingText.replace('{name}', fullName.value)
    }
  }

  const clearGreeting = (): void => {
    greetingMessage.value = ''
  }

  return {
    firstName,
    lastName,
    fullName,
    greetingMessage,
    greetUser,
    clearGreeting,
  }
}
