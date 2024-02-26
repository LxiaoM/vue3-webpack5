<template>
  <div class="layout">
    <div class="layout-header">
      <Nav></Nav>
    </div>
    <div class="layout-content">
      <div class="sidebar-menu-content">
        <SidebarMenu></SidebarMenu>
      </div>
      <div class="router-content">
        <router-view></router-view>
      </div>
    </div>

  </div>

</template>

<script setup>
  import Nav from '../../components/nav.vue' // header
  import SidebarMenu from '../../components/sidebar-menu.vue' // 侧边栏菜单
</script>

<style scoped lang="less">
.layout-content {
  display: flex;
  height: calc(100vh - 60px);

  .sidebar-menu-content {
    flex-shrink: 0;
    height: 100%;
    background-color: #000c17;
    min-width: 220px;
  }

  .router-content {
    flex-grow: 1;
  }
}
</style>
