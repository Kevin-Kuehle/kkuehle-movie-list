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
        <h3>{{ movie.Year }}</h3>
      </div>
      <div class="c-list-item__infos__type">
        <h3>{{ movie.Type }}</h3>
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
    background-color: #f5f5f5;
    cursor: pointer;

    > * img {
      filter: grayscale(0%);
    }
  }

  &__preview {
    width: 100%;
    height: 240px;
    background-color: grey;
    flex: 0 0;
    display: flex;
    align-content: center;
    justify-content: center;

    img {
      width: auto;
      height: 100%;
      object-fit: contain;
      filter: grayscale(90%);
    }
  }

  &___infos {
    display: flex;
    flex-flow: column nowrap;
  }
}
</style>
