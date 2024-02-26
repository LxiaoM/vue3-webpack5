<template>
  <div>
    <div class="header">
      <Nav></Nav>
    </div>
    <div class="content">
      <a-card size="small" title="Small size card" style="width: 300px">
        <template #extra>
          <a-button type="link" @click="$router.push({name: 'test'})">进入admin</a-button>
        </template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import Nav from '../components/nav.vue' // header
</script>

<style scoped lang="less">
.content {
  padding: 10px;
  margin-top: 30px
}
</style>
