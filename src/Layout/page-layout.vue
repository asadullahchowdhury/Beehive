<template>
  <div class="layout_body">
    <SideNav/>
    <router-view></router-view>
  </div>
</template>
<script>

import SideNav from '../Pages/include/SideNav.vue'

export default {
  components: SideNav,
}
</script>
