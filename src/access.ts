/**
 * 全局权限控制文件
 */

import { message } from "ant-design-vue";
import router from "./router";
import { useLoginUserStore } from "./stores/useLoginUserStore";

// 是否为首次获取登录用户
let firstFetchLoginUser = true;

/**
 * 全局权限校验
 * 利用 Vue Router 的路由守卫实现，每次切换并进入页面前，
 * 都会检查一下当前用户是否具有特定页面的权限
 */
router.beforeEach(async (to,from ,next)=>{
    const loginUserStore=useLoginUserStore()
    let loginUser=loginUserStore.loginUser
    //确保页面刷新，首次加载时，能够等后端返回用户信息后再校验权限
    if(firstFetchLoginUser){
        await loginUserStore.fetchLoginUser()
        loginUser=loginUserStore.loginUser
        //取反，表示下一次为非首次获取登录用户
        firstFetchLoginUser=false
    }
    //获取要去的路径，判断是否为管理员专属路径
    const toUrl=to.fullPath
    if(toUrl.startsWith('/admin')){
        if(!loginUser||loginUser.userRole!=='admin'){
            message.error("没有权限")
            //无权限，跳转到登录页
            next(`/user/login?redirect=${to.fullPath}`)
            return 
        }
    }
    next()
})


