<template>
  <div id="app">
    <NavBar />
    <br /><br />
  </div>
  <div class="container">
    <Errors v-if="error" :msg="error" />
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import NavBar from './components/NavBar.vue';
import Errors from './components/ErrorsComp.vue';
export default {
  components: {
    NavBar,
    Errors,
  },
  computed: {
    ...mapGetters(['error']),
  },
};
</script>
<style>
.card {
  border-radius: 0px;
}
</style>
