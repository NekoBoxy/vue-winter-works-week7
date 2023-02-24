<template>
  <div>
    <span>檢視訂單 - 簡表</span>
  </div>
  <div class="container">
    <table class="table align-middle">
      <thead>
        <tr>
          <td>訂單日期</td>
          <td>買家姓名</td>
          <td>買家 email</td>
          <td>買家電話</td>
          <td>訂單金額</td>
          <td>更多資訊</td>
          <td>刪除</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button type="button" class="btn btn-outline-secondary">檢視</button>
          </td>
          <td>
            <button type="button" class="btn btn-outline-secondary">刪除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <BPagination />
      </tfoot>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import BPagination from '../BPagination.vue';

export default {
  data() {
    return {
      pagination: {
        total_pages: "",
        current_page: 1,
        has_pre: false,
        has_next: false,
        category: "",
      },
    };
  },
  props: {

  },
  components: {
    BPagination,
  },
  mothods: {
    async getAllOrders() {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/orders`,
      }).catch((error) => {
        console.log("error", error.message);
      });
      console.log(response);
    },
    // 將 pagination 與 div="app" 連接起來
    // chain(page) {
    //   this.getProducts(page);
    // },
  },
  async mounted() {
    await this.getAllOrders();
  },
};
</script>

<style scoped></style>
