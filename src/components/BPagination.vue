<template>
  <div type="text/x-template" id="bPagination">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <!-- class 內容是變數時要綁 v-bind，不然會被當字串然後失效 -->
        <li :class="{ 'page-item': true, disabled: currentPage == 1 }">
          <a class="page-link" href="#" v-on:click="handlePrePage">
            上一頁
          </a>
        </li>
        <li :class="{ 'page-item': true, active: currentPage == page }" v-for="(page, key) in total_pages" v-bind:key="key">
          <a class="page-link" href="#" v-on:click="handleCurrentPage(page)">
            {{ page }}
          </a>
        </li>
        <li :class="{ 'page-item': true, disabled: currentPage == total_pages }">
          <a class="page-link" href="#" v-on:click="handleNextPage">
            下一頁
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    // 將 pagination 與 div="app" 連接起來
    // chain(page) {
    //   this.getProducts(page);
    // },
  },
};
</script>

<style scoped></style>
