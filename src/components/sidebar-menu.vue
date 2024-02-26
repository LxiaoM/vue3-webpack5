<template>
  <div class="sidebar-menu">
      <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys"
          mode="inline" theme="dark" :inline-collapsed="collapsed">
        <a-menu-item key="1">
          <template #icon>
            <PieChartOutlined />
          </template>
          <span @click="toPage('test')">OKR</span>
        </a-menu-item>
        <a-menu-item key="2">
          <template #icon>
            <DesktopOutlined />
          </template>
          <span>考勤</span>
        </a-menu-item>
        <a-menu-item key="3">
          <template #icon>
            <InboxOutlined />
          </template>
          <span>客服</span>
        </a-menu-item>
        <a-sub-menu key="sub2">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>财务</template>
          <a-menu-item key="9">关账管理</a-menu-item>
          <!--          <a-menu-item key="10">票务管理</a-menu-item>-->
          <a-sub-menu key="sub3" title="发票">
            <a-menu-item key="11">发票类型</a-menu-item>
            <a-menu-item key="12">发票退税管理</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub1">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>质检</template>
          <a-menu-item key="5">QC List</a-menu-item>
          <a-menu-item key="6">分拣单</a-menu-item>
          <a-menu-item key="7">QC Log</a-menu-item>
        </a-sub-menu>
      </a-menu>
  </div>
</template>

<script>
import {defineComponent, onMounted, reactive, toRefs, watch} from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, MailOutlined,
  DesktopOutlined, InboxOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
      message: '初始化'
    });
    onMounted(
        () => {
          // 获取state中的值
          console.log(state.message);
          // 执行方法
          getList();
        }
    );
    watch(
        () => state.openKeys,
        (_val, oldVal) => { state.preOpenKeys = oldVal }
    );
    function getList() {
      console.info('get list')
    }
    function toggleCollapsed() {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    }
    // 路由跳转
    function toPage(name) {
      this.$router.push({name:name})
    }
    return {
      ...toRefs(state),
      toggleCollapsed,
      toPage
    }
  }
})

</script>

<style scoped lang="less">

</style>
