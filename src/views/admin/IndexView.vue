<template>
<div>你在後台</div>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item nav-link p-3">
          <RouterLink to="/admin">後台首頁</RouterLink>
        </li>
        <li class="nav-item nav-link p-3">
          <RouterLink to="/admin/orders">訂單</RouterLink>
        </li>
        <li class="nav-item nav-link p-3">
          <RouterLink to="/admin/coupons">優惠碼</RouterLink>
        </li>
        <li class="nav-item nav-link p-3">
          <RouterLink to="/admin/products">產品</RouterLink>
        </li>
        <li class="nav-item nav-link p-3">
          <RouterLink to="/login">登入</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

<RouterView />
</template>

<script></script>

<style scoped>

</style>
