<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  props: {
    RouterLink,
    RouterView,
  },
  components: {},
};
</script>

<style scoped>

</style>