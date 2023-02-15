<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item nav-link p-3">
          <RouterLink to="/">首頁</RouterLink>
        </li>
        <li class="nav-item nav-link p-3">
          <RouterLink to="/about">關於我們</RouterLink>
        </li>
        <li class="nav-item nav-link p-3">
          <RouterLink to="/cart">購物車</RouterLink>
        </li>
        <li class="nav-item nav-link p-3">
          <RouterLink to="/products">產品一覽</RouterLink>
        </li>
        <li class="nav-item nav-link p-3">
          <RouterLink to="/login">登入</RouterLink>
        </li>
        <!-- <li class="nav-item">
          <RouterLink to="/product">單獨產品</RouterLink>
        </li> -->
      </ul>
    </div>
  </div>
</nav>

<RouterView />

</template>

<script></script>

<style scoped>

</style>
