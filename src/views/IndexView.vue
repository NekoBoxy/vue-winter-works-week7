<template>
  <div>我是前台頁面</div>
  <RouterLink to="/">首頁</RouterLink>
  <RouterLink to="/about">關於我們</RouterLink>
  <RouterLink to="/cart">購物車</RouterLink>
  <RouterLink to="/products">產品一覽</RouterLink>
  <RouterLink to="/product">單獨產品</RouterLink>
  <RouterView />
</template>

<script>
export default {
  data() { },
  methods: [],
};
</script>

<style scoped>

</style>
