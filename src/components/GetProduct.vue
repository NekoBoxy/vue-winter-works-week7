<template>
<div>
  <table>
    <thead>
      <tr>
        <th>產品圖片</th>
        <th>產品名稱</th>
      </tr>
    </thead>
    <tbody>
      <td style="width:200px" >
        <div style="height: 100px; background-size: cover; background-position: center"
          :style="{ 'background-image': `url(${product.imageUrl})` }">
        </div>
      </td>
      <td>{{ product.title }}</td>
    </tbody>
  </table>
</div>
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
  </template>
<p class="text-secondary" v-else>請選擇一個商品查看</p>
</div> -->
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {},
    }
  },
  methods: {
    // 取得遠端產品資料並存入 products:{}
    async GetProduct() {
      // console.log(this.$route.params.id);
      const { id } = this.$route.params;
      const res = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/product/${id}`,
      })
        // .catch((error) => {console.log(error);})
        ;
      // console.log(res);
      this.product = res.data.product;


    },
  },
  components: {

  },
  mounted() {
    this.GetProduct();
  },
};
</script>

<style scoped></style>