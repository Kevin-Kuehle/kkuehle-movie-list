<template>
  <div class="c-movie-search" @keyup.enter="search">
    <input v-model="searchTerm" type="text" placeholder="Search Title" />
    <input v-model="year" type="text" placeholder="Jahr" />
    <button @click="search" class="button">Suchen</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:searchTerm'])

const searchTerm = ref('')
const year = ref('')

function search() {
  if (searchTerm.value || year.value) {
    // send to parent
    emit('onSearch', {
      searchTerm: searchTerm.value,
      year: year.value
    })
  }
}
</script>

<style lang="scss" scoped>
.c-movie-search {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }

  input {
    padding: 8px 5px;
  }
}

.button {
  padding: 7px 123px;
}
</style>
