<template>
  <div class="flex flex-column justify-content-between h-screen">
    <div>
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';
import Home from './views/Home.vue';

export default {
  components: {
    Header,
    Footer,
    Home
  }
}
</script>

<style>
</style>