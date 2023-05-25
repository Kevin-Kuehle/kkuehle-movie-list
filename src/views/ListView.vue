<template>
  <div class="c-list-view">
    <div class="c-list-view__search">
      <MovieSearch @onSearch="searchHandler"></MovieSearch>
    </div>
    <div class="c-list-view__movie-list">
      <MovieList></MovieList>
    </div>
  </div>
</template>

<script setup>
import { MovieList } from '@components'
import { MovieSearch } from '@components'
import { useMovieStore } from '@stores'
import { provide, ref } from 'vue'

const movieStore = useMovieStore()
const resetList = ref(0)

function searchHandler(searchObj) {
  movieStore.searchMovies(searchObj.searchTerm, searchObj.year)
  resetList.value++
}

provide('resetList', resetList)
</script>

<style lang="scss" scoped>
.c-list-view {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;

  &__search {
    flex: 0 0 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__movie-list {
    flex: 1;
  }
}
</style>
