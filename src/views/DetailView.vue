<template>
  <template v-if="movieDetail">
    <section class="section section__detail-view">
      <MovieDetail :movie="movieDetail" />
    </section>
  </template>

  <template v-else>
    <div>
      <h1>Loading</h1>
    </div>
  </template>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { MovieDetail } from '@/components'

const route = useRoute()
const movieDetail: any = ref(null)

onMounted(async () => {
  const detailedMovieData = await fetch(
    `https://www.omdbapi.com/?apikey=${'95880f5'}&i=${route.params.id}`
  )
    .then((res) => res.json())
    .then((data) => data)

  movieDetail.value = detailedMovieData
})
</script>

<style scoped lang="scss">
.section {
  &__detail-view {
    padding: 2rem 20px;
  }
}
</style>
