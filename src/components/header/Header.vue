<template>
  <header class="c-header">
    <div class="c-header__inner">
      <div class="c-header__logo">MOVIELIST</div>
      <div class="c-header__navigation">
        <button @click="changeView('')" class="button">Home</button>
        <button @click="changeView('list')" class="button">List</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function changeView(view) {
  router.push(`/${view}`)
}
</script>

<style lang="scss" scoped>
.c-header {
  width: 100%;
  height: 70px;
  background: var(--color-header-background);
  display: flex;
  flex-flow: row nowrap;
  padding: 0.6rem 0;
  &__inner {
    flex: 1;
    display: grid;
    grid-template: auto / repeat(12, 1fr);
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    @media (width <= 850px) {
      // without auto expand
      grid-template: auto / repeat(4, minmax(0, 1fr));
      padding: 0 10px;
    }
  }

  &__logo {
    grid-area: 1/1 / 2/2;
    color: white;
    padding: 0 4rem;
    font-size: 1.9rem;
    font-weight: bold;

    @media (width <= 850px) {
      font-size: 1.3rem;
      padding: 0;
    }

    &:first-letter {
      color: var(--color-accent);
    }
  }

  &__navigation {
    grid-area: 1/6 / 2/8;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
}

.button {
  margin-right: 1rem;
  padding: 0.5rem 1.5rem;
  width: 90px;
  color: var(--color-text);

  &:last-child {
    margin-right: 0;
  }
}
</style>
