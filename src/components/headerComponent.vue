<template>
  <!-- right side header-->
  <div class="right-side-header">
    <div class="search-input">
      <i class="las la-search"></i>
      <input type="search" class="form-control shadow-none" placeholder="Search...">
    </div>

    <div class="each-options">
      <a href="#" class=" btn-cart-2"> <i class="las la-user-plus"></i></a>
      <a href="#" class=" btn-cart-2"> <i class="las la-bell"></i></a>
      <a href="#" class=" btn-cart-2"><i class="las la-envelope-open"></i></a>
      <a href="#" class=" btn-cart-2"> <i class="las la-shopping-bag"></i></a>
      <a href="#" class="user-img">
        <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/1670101867-bpfull.jpg" class="img-fluid" alt="">
        <span class="user-name">@User</span>
      </a>
      <!--          <router-link :to="{ name: 'Login'}">-->
      <!--            Login-->
      <!--          </router-link>-->
    </div>
  </div>
</template>

<script>


export default {
  components: {}
}

</script>
