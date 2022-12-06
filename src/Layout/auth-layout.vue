<template>
  <div class="layout_body">
    <AuthHeader/>
    <router-view></router-view>
  </div>
</template>
<script>
import AuthHeader from '../Pages/include/auth-header.vue'

export default {
  components: {
    AuthHeader,
  }
}
</script>
