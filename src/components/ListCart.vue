<template>
<table class="table align-middle">
  <thead>
    <tr>
      <th>產品名稱</th>
      <th>數量</th>
      <th>單價</th>
      <th>金額小計</th>
    </tr>
  </thead>
  <tbody>
    <!-- 改到這邊，要把得到的購物車資料逐筆渲染到畫面上-->
    <tr v-for= "(item, i) in carts" v-bind:key="i">
      <td>{{ item.title }}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      carts: null,
      // data: {},
    };
  },
  methods: {
    async getCart() {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart`,
      });
      // console.log(response);
      // this.data = response.data;
      // console.log(this.data);
      this.carts = response.data.data.carts;
      console.log("成功取得購物車清單");
    },
  },
  async mounted() {
    await this.getCart();
  },
};
</script>

<style scoped></style>
