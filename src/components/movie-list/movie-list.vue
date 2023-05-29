<template>
  <template v-if="movieStore.movieList.length > 0">
    <div
      v-if="movieStore.$state.totalResults && movieStore.$state.maxPages"
      class="c-movie-list__info"
    >
      <div class="c-movie-list__info__total">Ergebnisse: {{ movieStore.$state.totalResults }}</div>
      <div class="c-movie-list__info__max-page">Seiten: {{ movieStore.$state.maxPages }}</div>
      <div class="c-movie-list__info__current-page">
        Seiten geladen: {{ movieStore.$state.loadedPages }}
      </div>
    </div>
    <div @scroll="handleScrolling" ref="movieListRef" class="c-movie-list">
      <template v-for="movie in movieStore.movieList" :key="movie.imdbID">
        <MovieListItem :movie="movie"></MovieListItem>
      </template>
    </div>
  </template>
  <template v-else>
    <div class="c-movie-list__loading">
      <p>
        No Movies found, <br />
        pls search 🔍 a movie by title
      </p>
    </div>
  </template>
</template>

<script setup lang="ts">
import { MovieListItem } from '@/components'
import { useMovieStore } from '@/stores'
import { ref, inject, watch, watchEffect } from 'vue'

const movieStore = useMovieStore()
const movieListRef = ref<HTMLElement | null>(null)

// handle scrolling to load more movies
function handleScrolling() {
  const maxScroll: number = movieListRef.value?.scrollHeight || 0

  let currentScroll: number = 0
  if (movieListRef.value?.scrollTop) {
    currentScroll = movieListRef.value?.scrollTop + movieListRef.value?.clientHeight
  }

  const scrollTrigger: number = Math.ceil(maxScroll * 0.9) || 0

  if (!movieStore.loadingPage && currentScroll >= scrollTrigger) {
    movieStore.appendNextPage()
  }
  console.log(`devlog: movieStore`, movieStore.maxPages)
  // handler if width to big for items count
}

// inject the resetList ref from the parent component
const resetList = ref(inject('resetList'))

// after click search button, reset the scroll position to top
function reset() {
  if (movieListRef.value) movieListRef.value.scrollTop = 0
}

function isScrollable() {
  if (movieListRef.value?.scrollHeight && movieListRef.value?.clientHeight) {
    return movieListRef.value?.scrollHeight > movieListRef.value?.clientHeight
  }
  return false
}

watch(resetList, () => {
  reset()
})

// watch state from store

watchEffect(() => {
  if (movieStore.$state.maxPages && movieStore.$state.maxPages > 1) {
    if (!isScrollable() && movieStore.$state.loadedPages == 1) {
      console.log(`devlog: ######`, isScrollable())
      movieStore.appendNextPage()
    }
  }
})
</script>

<style lang="scss" scoped>
.c-movie-list__info {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  justify-self: center;
  width: 370px;
  padding: 0 0 2.5rem 0;
  margin: 0 auto;
}
.c-movie-list {
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  height: auto;
  max-height: 80dvh;
  max-width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (width <= 2100px) {
    grid-template: auto / repeat(3, 1fr);
  }

  @media (width <= 1500px) {
    grid-template: auto / repeat(2, 1fr);
  }

  @media (width <= 800px) {
    grid-template: auto / 1fr;
  }

  // hide scrollbar
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

.c-movie-list__loading {
  text-align: center;
  font-size: 1.4rem;
  padding: 0.5rem;

  p {
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
