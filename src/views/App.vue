<template>
  <div>
    <HomeView to="/"></HomeView> |
    <AboutView :to="{ name='about' }"></AboutView>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";

export default {
  props: {
    RouterLink,
    RouterView,
  },
  components: {
    HomeView,
    AboutView,
  },
};
</script>
