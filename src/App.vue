<script setup>

</script>

<template>
  <!-- 一级路由出口 -->
  <RouterView />
  <el-button type="primary">Primary</el-button>
  <div class="test">
    test scss
  </div>
</template>
<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
