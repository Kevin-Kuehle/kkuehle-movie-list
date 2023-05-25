<template>
  <template v-if="movieStore.movieList.length > 0">
    <div @scroll="handleScrolling" ref="movieListRef" class="c-movie-list">
      {{ movies }}
      <template v-for="movie in movieStore.movieList" :key="movie.imdbID">
        <MovieListItem :movie="movie"></MovieListItem>
      </template>
    </div>
  </template>
  <template v-else>
    <div class="c-movie-list__loading">
      <p>No Movies found, pls search a movie by title</p>
    </div>
  </template>
</template>

<script setup lang="ts">
import { MovieListItem } from '@components'
import { useMovieStore } from '@stores'
import { ref, inject, watch } from 'vue'

const movieStore = useMovieStore()
const movieListRef = ref<HTMLElement | null>(null)

// handle scrolling to load more movies
function handleScrolling() {
  const maxScroll = movieListRef.value?.scrollHeight
  const currentScroll = movieListRef.value?.scrollTop + movieListRef.value?.clientHeight
  const scrollTrigger = Math.ceil(maxScroll * 0.9)

  if (!movieStore.loadingPage && currentScroll >= scrollTrigger) {
    movieStore.appendNextPage()
  }
}

// inject the resetList ref from the parent component
const resetList = inject('resetList')

// after click search button, reset the scroll position to top
function reset() {
  if (movieListRef.value) movieListRef.value.scrollTop = 0
}

watch(resetList, () => {
  reset()
})
</script>

<style lang="scss" scoped>
.c-movie-list {
  display: grid;
  border: 1px solid grey;
  height: auto;
  max-height: 80dvh;
  overflow-y: scroll;
}

.c-movie-list__loading {
  text-align: center;
  font-size: 1.4rem;
}
</style>
