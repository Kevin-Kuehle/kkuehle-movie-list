<template>
  <Header></Header>
  <main class="main">
    <RouterView />
  </main>
  <Footer></Footer>
</template>

<script setup>
import Header from '@components/header/Header.vue'
import Footer from '@components/footer/Footer.vue'
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
}
</style>
