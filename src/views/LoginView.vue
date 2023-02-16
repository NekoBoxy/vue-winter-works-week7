<template>
  <!-- 3. 使用 AdminLogin 元件 -->
  <AdminLogin />
</template>

<script>
// 1. 引入 AdminLogin 元件
import AdminLogin from "../components/AdminLogin.vue";

export default {
  data() {
    return {

    };
  },
  components: {
    // 2. 註冊 AdminLogin 元件
    AdminLogin,
  },
};
</script>

<style scoped>

</style>
