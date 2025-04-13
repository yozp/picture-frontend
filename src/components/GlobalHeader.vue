<!--全局顶部导航栏文件-->

<template>
    <div id="globalHeader">
        <!--优化导航栏的布局，采用 栅格组件的自适应布局（左中右结构，左侧右侧宽度固定，中间菜单栏自适应）-->
        <a-row :wrap="false">
            <!--左-->
            <a-col flex="200px">
                <!--RouterLink 组件的作用是支持超链接跳转-->
                <RouterLink to="/">
                    <div class="title-bar">
                        <img class="logo" src="../assets/logo.png" alt="logo" />
                        <div class="title">yunikon图库</div>
                    </div>
                </RouterLink>
            </a-col>
            <!--中-->
            <a-col flex="auto">
                <a-menu
                    v-model:selectedKeys="current"
                    mode="horizontal"
                    :items="items"
                    @click="doMenuClick"
                />
            </a-col>
            <!--右-->
            <a-col flex="120px">
              <div class="user-login-status">
                <div v-if="loginUserStore.loginUser.id">
                  {{ loginUserStore.loginUser.userName ?? '无名' }}
                </div>
                <div v-else>
                  <a-button type="primary" href="/user/login">登录</a-button>
                </div>
              </div>
            </a-col>
        </a-row>

    </div>

</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import { MenuProps } from 'ant-design-vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore';
import { useRouter } from "vue-router";
const router = useRouter();

const loginUserStore = useLoginUserStore()


// 当前选中菜单
const current = ref<string[]>([])

// 路由跳转事件
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

// 监听路由变化，更新当前选中菜单
router.afterEach((to, from, next) => {
  current.value = [to.path];
});

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
  },
  {
    key: 'others',
    label: h('a', { href: 'https://www.codefather.cn', target: '_blank' }, '编程导航'),
    title: '编程导航',
  },
])
</script>


<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
