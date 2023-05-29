<template>
  <div class="c-movie-detail">
    <div class="c-movie-detail__thumbnail">
      <img :src="movie.Poster" :alt="movie.Title" />
    </div>
    <div class="c-movie-detail__info">
      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Title:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Title }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Year:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Year }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Released:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Released }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Runtime:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Runtime }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Genre:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Genre }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Director:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Director }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Writer:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Writer }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Actors:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Actors }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Plot:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Plot }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Language:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Language }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">Country:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.Country }}</div>
      </div>

      <div class="c-movie-detail__info__item">
        <div class="c-movie-detail__info__item_label">DVD:</div>
        <div class="c-movie-detail__info__item_value">{{ movie.DVD }}</div>
      </div>
    </div>
  </div>
  <div class="c-movie-detail__actions">
    <button @click="goBack" class="button">Back</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

function goBack() {
  window.history.back()
}
</script>

<style lang="scss" scoped>
.c-movie-detail {
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  padding: 10px;
  // background-color: rgb(224, 224, 224);

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }

  &__info {
    font-size: 16px;
    flex: 1;

    &__item {
      display: flex;
      flex-flow: row nowrap;
      gap: 10px;

      &_label {
        font-weight: bold;
        flex: 0 0 90px;
      }

      &_value {
        flex: 1;
      }
    }
  }
}

.c-movie-detail__actions {
  padding: 1rem 10px;
  .button {
    padding: 12px 16px;
    color: white;
  }
}
</style>
