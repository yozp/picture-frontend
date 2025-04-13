<!--全局布局文件-->

<template>
    <div id="basicLayout">
        <a-layout style="min-height: 100vh">
            <!--顶部-->
            <a-layout-header class="header">
                <GlobalHeader />
            </a-layout-header>

            <!--中间-->
            <!--动态替换内容-->
            <a-layout-content class="content">
                <router-view />
            </a-layout-content>
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
import GlobalHeader from '@/components/GlobalHeader.vue';

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
  padding: 20px;
}
#basicLayout .header {
  padding-inline: 20px;
  margin-bottom: 16px;
  color: unset;
  background: white;
}

</style>