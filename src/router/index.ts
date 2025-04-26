import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from "@/pages/HomePage.vue";
import UserLoginPage from '@/pages/user/UserLoginPage.vue';
import UserRegisterPage from '@/pages/user/UserRegisterPage.vue';
import UserManagePage from '@/pages/admin/UserManagePage.vue';
import AddPicturePage from '@/pages/AddPicturePage.vue';
import PictureManagePage from '@/pages/admin/PictureManagePage.vue';
import PictureDetailPage from '@/pages/PictureDetailPage.vue';

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "home",
//     component: HomePage,
//   },
// ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/',
      name: '主页',
      component: HomePage,
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: UserLoginPage,
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: UserRegisterPage,
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: UserManagePage,
    },
    {
      path:'/add_picture',
      name:'创建图片',
      component:AddPicturePage,
    },
    {
      path:'/admin/pictureManage',
      name:'图片管理',
      component:PictureManagePage
    },
    {
      path:'/picture/:id',
      name:'图片详情',
      component:PictureDetailPage,
      props:true //动态路由
    },
  ],
})

export default router
