<!--全局布局文件-->

<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <!--顶部-->
      <a-layout-header class="header">
        <!--全局顶部栏组件-->
        <GlobalHeader />
      </a-layout-header>

      <!--中间-->
      <a-layout>
        <!--全局侧边栏组件-->
        <GlobalSider class="sider" />
        <!--动态替换内容-->
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
      </a-layout>
      
      <!--底部-->
      <a-layout-footer class="footer">
        <a href="https://space.bilibili.com/503124854?spm_id_from=333.1007.0.0" target="_blank">
          bilibili @ yunikon
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalSider from '@/components/GlobalSider.vue'
</script>

<style scoped>
#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
#basicLayout .content {
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 28px;
  padding: 28px;
}
#basicLayout .header {
  padding-inline: 20px;
  margin-bottom: 1px;
  color: unset;
  background: white;
}
#basicLayout .sider {
  background: #fff;
  padding-top: 20px;
  border-right: 0.5px solid #eee;
}

#basicLayout :deep(.ant-menu-root) {
  border-bottom: none !important;
  border-inline-end: none !important;
}
</style>
