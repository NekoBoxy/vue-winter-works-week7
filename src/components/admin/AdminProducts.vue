<template>
  <table class="table align-middle">
    <thead>
      <tr>
        <td>圖片</td>
        <td>分類</td>
        <td>單位(個/unit)</td>
        <td>原價</td>
        <td>售價</td>
        <td>是否啟用</td>
        <td>編輯</td>
        <td>刪除</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" v-bind:key="product.id">
        <td style="width:200px">
          <div style="height: 100px; background-size: cover; background-position: center"
            :style="{ 'background-image': `url(${product.imageUrl})` }">
          </div>
        </td>
        <td>{{ product.category }}</td>
        <td>{{ product.unit }}</td>
        <td>{{ product.origin_price }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.price.is_enabled }}</td>
        <td>
          <button class="btn btn-outline-secondary">編輯</button>
        </td>
        <td>
          <button class="btn btn-outline-secondary">刪除</button>
        </td>
      </tr>
    </tbody>
    <thead>
      
    </thead>
  </table>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: {},
      pagination: {
        total_pages: "",
        current_page: 1,
        has_pre: false,
        has_next: false,
        category: ""
      },
    };
  },
  components: {

  },
  methods: {
    async getAllProducts() {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/products/`,
      }).catch((error) => {
        console.log("error", error);
      });
      console.log("res", response.data.products[0]);
      this.products = response.data.products;
      this.pagination = response.data.pagination;
      console.log("已取得遠端產品資料");
    },
  },
  async mounted() {
    await this.getAllProducts();
  },
};
</script>

<style scoped></style>
