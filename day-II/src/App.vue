<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ApiClient } from './api'

const currentJokeSetup = ref()
const currentJokeDelivery = ref()
const deliveryShown = ref(false)

const JokeClient = new ApiClient()

const getChristmasJoke = async () => {
  try {
    const response = await JokeClient.fetchChristmasJoke()

    currentJokeSetup.value = response.setup
    currentJokeDelivery.value = response.delivery
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

const revealPunchline = () => {
  if (deliveryShown.value) {
    currentJokeSetup.value = ''
    currentJokeDelivery.value = ''
    deliveryShown.value = false
    getChristmasJoke()
    return
  }
  deliveryShown.value = true
}

onMounted(() => {
  getChristmasJoke()
})
</script>

<template>
  <div class="flex h-screen w-screen justify-center">
    <div class="flex flex-col w-2/4 h-full flex justify-center items-center">
      <div class="bg-teal-800 p-3 rounded-xl w-2/3 text-white self-start mb-2">
        {{ currentJokeSetup }}
      </div>

      <div v-if="deliveryShown" class="bg-red-800 p-3 rounded-xl w-2/3 text-white self-end">
        {{ currentJokeDelivery }}
      </div>

      <button class="bg-green col-span-1 rounded-lg py-2 hover:opacity-90 w-full mx-auto mt-4" @click="revealPunchline">
        {{ !deliveryShown ? 'Tell Me!' : 'Another' }}
      </button>
    </div>
  </div>
</template>
