
<template>
  <div id="app">
    <BasicLayout/>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue';
// import { useLoginUserStore } from './stores/useLoginUserStore';

// const loginUserStore = useLoginUserStore();
// loginUserStore.fetchLoginUser();

</script>

<style scoped>
#app {
}
</style>
