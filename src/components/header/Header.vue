<template>
  <header class="c-header">
    <div class="c-header__inner">
      <button @click="changeView('')" class="button">Home</button>
      <button @click="changeView('list')" class="button">List</button>
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
  height: 50px;
  background: var(--color-header-background);
  display: flex;
  flex-flow: row nowrap;

  &__inner {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
}

.button {
  margin-right: 1rem;
  padding: 0.4rem 1.2rem;

  &:last-child {
    margin-right: 0;
  }
}
</style>
