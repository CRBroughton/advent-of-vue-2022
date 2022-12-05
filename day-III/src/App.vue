<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNow } from '@vueuse/core'
import CountdownSegment from './components/CountdownSegment.vue'
import { getTimeBetween } from './utils/getTimeBetween'
import CountdownHeader from '@/components/CountdownHeader.vue'

interface DateTimeType {
  days: number | undefined
  hours: number | undefined
  minutes: number | undefined
  seconds: number | undefined
}

const currentDateTime = ref<DateTimeType>({
  days: undefined,
  hours: undefined,
  minutes: undefined,
  seconds: undefined,
})

onMounted(() => {
  window.setInterval(() => {
    const now = useNow()
    const christmas = new Date('12/25/2022 00:00:00')
    currentDateTime.value = getTimeBetween(christmas.getTime(), now.value.getTime())
  }, 1000)
})
</script>

<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="currentDateTime.days" />
          <CountdownSegment label="hours" :number="currentDateTime.hours" />
          <CountdownSegment label="minutes" :number="currentDateTime.minutes" />
          <CountdownSegment label="seconds" :number="currentDateTime.seconds" />
        </main>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
</style>
