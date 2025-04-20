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
                  <a-dropdown>
                    <ASpace>
                      <a-avatar :src="loginUserStore.loginUser.userAvatar" />
                      {{ loginUserStore.loginUser.userName ?? '无名' }}
                    </ASpace>
                    <template #overlay>
                      <a-menu>
                        <a-menu-item @click="doLogout">
                          <LogoutOutlined />
                          退出登录
                        </a-menu-item>
                      </a-menu>
                    </template>
                  </a-dropdown>
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
import { computed, h, ref } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import { MenuProps, message } from 'ant-design-vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore';
import { useRouter } from "vue-router";
import { userLogoutUsingPost } from '@/api/userController';
const router = useRouter();

const loginUserStore = useLoginUserStore();


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

// 菜单列表
const originItems = [
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/admin/userManage',
    label: '用户管理',
    title: '用户管理',
  },
  {
    key: 'others',
    label: h('a', { href: 'https://www.codefather.cn', target: '_blank' }, '编程导航'),
    title: '编程导航',
  },
]

//过滤菜单项（用户看不到管理用户选项）
const filterMenus=(menus=[] as MenuProps['items'])=>{
  return menus?.filter((menu)=>{
    if(menu.key.startsWith('/admin')){
      const loginUser=loginUserStore.loginUser
      if(!loginUser||loginUser.userRole!=="admin"){
        return false//丢掉这条数据
      }
    }
    return true//保留这条数据
  })
}

// 展示在菜单的路由数组
const items = computed<MenuProps['items']>(() => filterMenus(originItems))

/**
 * 退出登录
 */
const doLogout=async()=>{
  const res=await userLogoutUsingPost()
  console.log(res)
  if(res.data.code===0){
    loginUserStore.setLoginUser({
      userName:'未登录'
    })
    message.success('退出登录成功')
    //退出登录后返回登录页
    await router.push('/user/login')
  }else{
    message.error('退出登录失败，'+ res.data.message)
  }
}

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
