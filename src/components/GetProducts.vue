<template>
  <table>
    <thead>
      <tr>
        <th>產品圖片</th>
        <th>產品名稱</th>
        <th>價格</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" v-bind:key="product.id">
        <td style="width:200px" >
          <!-- img 不好控，故用 div 控 -->
          <div style="height: 100px; background-size: cover; background-position: center" :style="{ 'background-image': `url(${product.imageUrl})` }">
          </div>
        </td>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td width="120">
          <button type="button" v-on:click="handleDetail">
            點我看更多
          </button>
        </td>
        <!-- <td width="120">
          <button type="button" class="btn btn-primary">
            加入購物車
          </button>
        </td> -->
      </tr>
    </tbody>
  </table>
<!-- <div class="col-md-6">
      <h2>單一產品細節</h2>
      <template v-if="temp.title">
        <div class="card mb-3">
          <img v-bind:src="temp.imageUrl" class="card-img-top primary-image" alt="主圖" />
          <div class="card-body">
            <h5 class="card-title">
              {{ temp.title }}
              <span class="badge bg-primary ms-2">{{ temp.category }}</span>
            </h5>
            <p class="card-text">商品描述：{{ temp.description }}</p>
            <p class="card-text">商品內容：{{ temp.content }}</p>
            <div class="d-flex">
              <p class="card-text me-2">{{ temp.price }}</p>
              <p class="card-text text-secondary">
                <del>{{ temp.origin_price }}</del>
              </p>
              {{ temp.unit }} / 元
            </div>
          </div>
        </div>
        <template v-for="item in temp.imagesUrl">
          <img v-bind:src="item" alt="" class="images m-2" />
        </template>
      </template>
      <p class="text-secondary" v-else>請選擇一個商品查看</p>
    </div> -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: {},
    };
  },
  methods: {
    async GetProducts() {
      const response = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/products/all`
      });
      console.log(response.data.products[0]);
      this.products = response.data.products;
    },
  },
  async mounted() {
    await this.GetProducts();
  },
  async handleDetail() {

  },
};
</script>

<style scoped></style>
