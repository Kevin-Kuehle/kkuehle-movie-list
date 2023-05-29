<template>
  <div class="c-list-item" @click="openDetail">
    <div class="c-list-item__preview">
      <img :src="movie.Poster" :alt="movie.Title" />
    </div>
    <div class="c-list-item__infos">
      <div class="c-list-item__infos__title">
        <h2>{{ movie.Title }}</h2>
      </div>
      <div class="c-list-item__infos__year">
        <p>{{ movie.Year }}</p>
      </div>
      <div class="c-list-item__infos__type">
        <p>{{ movie.Type }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  movie: {
    required: true
  }
})
const router = useRouter()

async function openDetail() {
  router.push({
    name: 'detail',
    params: {
      id: props.movie.imdbID
    }
  })
}
</script>

<style lang="scss" scoped>
.c-list-item {
  display: flex;
  flex-flow: row nowrap;
  gap: 25px;
  padding: 10px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: var(--color-accent-light);
    cursor: pointer;

    > * img {
      filter: grayscale(0%);
    }
  }

  &__preview {
    width: 100%;
    height: 240px;
    background-color: white;
    flex: 0 0;
    display: flex;
    align-content: center;
    justify-content: center;

    img {
      flex: 0 0 auto;
      width: auto;
      max-width: 160px;
      object-fit: contain;
      margin-bottom: auto;
      filter: grayscale(90%);
    }
  }

  &__infos {
    display: flex;
    flex-flow: column nowrap;

    &__title {
      font-size: 0.8rem;
      line-height: 180%;
      font-weight: bold;
      text-transform: uppercase;

      @media (width <= 768px) {
        font-size: 0.6rem;
      }

      h2 {
        white-space: pre-line;
        word-wrap: break-word;
      }
    }

    &__year {
      font-size: 0.9rem;
      line-height: 180%;
      font-weight: bold;
      text-transform: uppercase;
    }

    &__type {
      font-size: 0.8rem;
      line-height: 180%;
      font-weight: bold;
      color: var(--color-accent);
      text-transform: uppercase;
    }
  }
}
</style>
