<template>
  <template v-if="movieDetail">
    <MovieDetail :movie="movieDetail" />
  </template>

  <template v-else>
    <div>
      <h1>Loading</h1>
    </div>
  </template>
</template>
<script setup lang="ts">
import { ref, defineProps, beforeMount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { MovieDetail } from '@components'

const route = useRoute()

// get id from route

const movieDetail = ref(null)

// get id from route

onMounted(async () => {
  const detailedMovieData = await fetch(
    `http://www.omdbapi.com/?apikey=${'95880f5'}&i=${route.params.id}`
  )
    .then((res) => res.json())
    .then((data) => data)

  movieDetail.value = detailedMovieData
})
</script>
