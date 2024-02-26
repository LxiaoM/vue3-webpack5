<template>
  <div class="nav">
    <div class="logo" @click="$router.push({name:'home'})">
      <div class="logo-image"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.nav {
  height: 60px;
  border: 1px solid #e8e8e8;
  .logo {
    color: red;
    background: rgba(0, 0, 0, .7);
    .logo-image {
      width: 60px;
      height: 60px;
      background: url("../assets/images/my-logo.png") center center;
      background-size: 100%, 100%;
      overflow: hidden;
    }
  }
}
</style>
