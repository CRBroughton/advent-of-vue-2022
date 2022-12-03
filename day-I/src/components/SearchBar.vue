<script setup lang="ts">
import { ref, watch } from 'vue'
import { ApiClient } from '../api'
import type { Product } from '../api/types'
import { debounce } from '../utils'

const DummyClient = new ApiClient()

const searchTerm = ref('')
const searchResults = ref<Product[]>([])
const isLoading = ref(false)

const getSearchTerm = async () => {
  const search = searchTerm.value
    ? `search?q=${searchTerm.value}`
    : 'search?'

  try {
    isLoading.value = true
    const response = await DummyClient.FetchDummyData(search)

    if (response.total === 0) {
      // eslint-disable-next-line no-alert
      alert('No products found :(')
    }

    searchResults.value = response.products
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
  finally {
    isLoading.value = false
  }
}

const runDebounce = debounce(getSearchTerm)

watch(() => searchTerm.value, (newVal) => {
  if (newVal.length <= 0) {
    searchResults.value = []
    return
  }
  runDebounce()
})
</script>

<template>
  <input v-model="searchTerm" class="search-bar" type="text" placeholder="Search here">
  <slot :search-results="searchResults" :is-loading="isLoading" />
</template>

<style scoped>
input {
  width: 100%;
  padding-block: 1em;
}
</style>
