<template>
  <div class="home">
    <!--轮播图-->
    <HomeBanner/>
  </div>
</template>

<script>
import HomeBanner from "./HomeBanner.vue";
export default {
  components: {
    HomeBanner
  }
}
</script>

<style lang="less" scoped>
  .home{
  position: relative;
  left: 110px;    
  }
</style>