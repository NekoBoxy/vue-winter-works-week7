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
      <tr v-for="item in carts" v-bind:key="item.id">
        <td>{{ item.product.title }}</td>
        <td>{{ item.qty }}</td>
        <td>{{ item.product.price }}</td>
        <td>{{ item.total }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ total }}</td>
      </tr>
    </tfoot>
  </table>
  <div class="text-end">
    <button class="btn btn-outline-primary" v-on:click="clearCarts">
      清空購物車
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      carts: null,
      final_total: 0,
      total: 0,
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
      // hint: final_total & total 跟 carts 是不同層的=_=+
      this.final_total = response.data.data.final_total;
      this.total = response.data.data.total;
      console.log("成功取得購物車清單");
    },
    clearCarts() {
      this.carts = {};
      this.final_total = 0;
      this.total = 0;
    },
  },
  async mounted() {
    await this.getCart();
  },
};
</script>

<style scoped></style>
