<template>
<!-- right side header-->
      <div class="right-side-header">
        <div class="search-input">
          <i class="las la-search"></i>
          <input type="search" class="form-control shadow-none" placeholder="Search...">
        </div>

        <div class="each-options">
          <a href="#" class=" btn-cart-2"> <i class="las la-shopping-bag"></i></a>
          <router-link :to="{ name: 'Login'}">
            Login
          </router-link>
        </div>
      </div>
</template>

<script>


export default {
  components: {}
}

</script>
