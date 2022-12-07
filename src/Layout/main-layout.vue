<template>
  <div class="layout_body photos-page">
    <LeftSideMenu/>
    <div class="right-side-container">
      <HeaderComponent/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftSideMenu from "@/components/leftSideMenu";
import HeaderComponent from "@/components/headerComponent";

export default {
  components: {LeftSideMenu, HeaderComponent}
}

</script>
