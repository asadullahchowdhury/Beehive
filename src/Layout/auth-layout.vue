<template>
  <div class="layout_body">
    <headerComponentAuth/>
    <router-view></router-view>
  </div>
</template>
<script>


import headerComponentAuth from "@/components/headerComponentAuth";

export default {
  components:{
    headerComponentAuth,
  }
}
</script>
