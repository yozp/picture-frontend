<!--用户登录页面-->

<template>
    <div id="userLoginPage">
        <h2 class="title">yunikon图库 - 用户登录</h2>
        <div class="desc">智能云图库</div>
        <a-form :model="formState" name="basic" autocomplete="off" @finish="handleSubmit">
        <a-form-item name="userAccount" :rules="[{ required: true, message: '请输入账号' }]">
            <a-input v-model:value="formState.userAccount" placeholder="请输入账号" />
        </a-form-item>
        <a-form-item
            name="userPassword"
            :rules="[
            { required: true, message: '请输入密码' },
            { min: 8, message: '密码不能小于 8 位' },
            ]"
        >
            <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码" />
        </a-form-item>
        <div class="tips">
            没有账号？
            <RouterLink to="/user/register">去注册</RouterLink>
        </div>
        <a-form-item>
            <a-button type="primary" html-type="submit" style="width: 100%">登录</a-button>
        </a-form-item>
        </a-form>
    </div>
</template>
  

<script setup lang="ts">
import { userLoginUsingPost } from '@/api/userController';
import { useLoginUserStore } from '@/stores/useLoginUserStore';
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';


//定义一个响应式变量来接受表单输入的值
const formState = reactive<API.UserLoginRequest>({
  userAccount: '',
  userPassword: '',
})

const router=useRouter();
const loginUserStore=useLoginUserStore();

/**
 * 提交表单
 * @param values 
 */
const handleSubmit =async(values:any)=>{
    //await作用是把异步变成同步，执行完这行代码再执行下一行
    const res=await userLoginUsingPost(values);
    //若登录成功，则把登录态保存到全局状态中
    //res是ajax的返回，data是业务返回，code和data是业务返回值
    if(res.data.code===0&&res.data.data){
        await loginUserStore.fetchLoginUser()
        message.success('登录成功')
        router.push({
            path:'/',
            //这里replace:true表示将当前的页面干掉，回退页面不会回到当前页面
            replace:true,
        })
    }else{
        message.error('登录失败，'+ res.data.message)
    }
}

</script>

<style scoped>
#userLoginPage {
  max-width: 360px;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 16px;
}

.desc {
  text-align: center;
  color: #bbb;
  margin-bottom: 16px;
}

.tips {
  margin-bottom: 16px;
  color: #bbb;
  font-size: 13px;
  text-align: right;
}

</style>
  