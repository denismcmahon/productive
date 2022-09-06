<template>
  <div id="app">
    <NavBar />
  </div>
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
};
</script>
<style></style>
