<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <div class="app-container">
    <h1>
      Gift Search App
    </h1>
    <SearchBar>
      <template #default="{ searchResults, isLoading }">
        <div class="gifts-container">
          <div v-if="isLoading" class="loading-notification">
            Loading...
          </div>
          <ul>
            <div v-for="result in searchResults" :key="result.id">
              <li>{{ result.title }} - {{ result.price }}</li>
            </div>
          </ul>
        </div>
      </template>
    </SearchBar>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.loading-notification {
  display: flex;
  justify-content: center;
  padding-top: 10px;
};
.gifts-container {
  display: flex;
  justify-content: left;
}
</style>
