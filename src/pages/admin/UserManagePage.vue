<!--用户管理页-->

<template>
    <div id="userManagePage">
        <!--搜索表单-->
        <a-form layout="inline" :model="searchParams" @finish="doSearch">
            <a-form-item label="账号">
                <a-input v-model:value="searchParams.userAccount" placeholder="输入账号" />
            </a-form-item>
            <a-form-item label="用户名">
                <a-input v-model:value="searchParams.userName" placeholder="输入用户名" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit">搜索</a-button>
            </a-form-item>
        </a-form>

        <!--展示表格-->
        <a-table
            :columns="columns"
            :data-source="dataList"
            :pagination="pagination"
            @change="doTableChange"
        >
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'userAvatar'">
                    <a-image :src="record.userAvatar" :width="120" />
                </template>
                <template v-else-if="column.dataIndex === 'userRole'">
                    <div v-if="record.userRole === 'admin'">
                    <a-tag color="red">管理员</a-tag>
                    </div>
                    <div v-else>
                    <a-tag color="blue">普通用户</a-tag>
                    </div>
                </template>
                <template v-else-if="column.dataIndex === 'createTime'">
                    {{ dayjs(record.createTime).format('YYYY-MM-DD HH:mm:ss') }}
                </template>
                <template v-else-if="column.key === 'action'">
                    <a-button danger @click="doDelete(record.id)">删除</a-button>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script setup lang="ts">
import { deleteUserUsingPost, listUserVoByPageUsingPost } from '@/api/userController';
import { message } from 'ant-design-vue';
import { computed, onMounted, reactive, ref } from 'vue';
import dayjs from 'dayjs'

//定义表格列
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: '账号',
    dataIndex: 'userAccount',
  },
  {
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: '头像',
    dataIndex: 'userAvatar',
  },
  {
    title: '简介',
    dataIndex: 'userProfile',
  },
  {
    title: '用户角色',
    dataIndex: 'userRole',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
  },
  {
    title: '操作',
    key: 'action',
  },
]

//响应式数据
const dataList=ref([])
const total=ref(0)

//搜索条件（响应式）
const searchParams=reactive<API.UserQueryRequest>({
    //设置默认值
    current:1,
    pageSize:10,
})

//获取数据/刷新数据
const fetchData=async()=>{
    const res=await listUserVoByPageUsingPost({
        ...searchParams
    })
    if(res.data.data){
        dataList.value=res.data.data.records ?? []
        total.value=res.data.data.total ?? 0
    }else{
        message.error('获取数据失败，'+ res.data.message)
    }
}

//页面加载时请求一次
onMounted(()=>{
    fetchData()
})

//---------------------------------------------------------

//分页参数，显示可选择分页按钮
//表格组件自带的api，分页器 :pagination
//computed使得分页参数使得搜索条件的改变而改变
const pagination=computed(()=>{
    return {
        current:searchParams.current ?? 1,
        pageSize: searchParams.pageSize ?? 10,
        total: total.value,
        showSizeChanger: true,
        showTotal: (total) => `共 ${total} 条`,
    }
})

//表格变化处理（当用户切换页号和页面大小时，需要更新 searchParams 搜索条件的值）
const doTableChange=(page:any)=>{
    searchParams.current=page.current
    searchParams.pageSize=page.pageSize
    fetchData()
}

//--------------------------------------------------------

//点击搜索获取数据
const doSearch=()=>{
    //重置页码为1，同时再次调用ferchData()
    searchParams.current=1
    fetchData()
}

//--------------------------------------------------------------

//删除用户
const doDelete=async(id:string)=>{
    if(!id){
        return 
    }
    const res=await deleteUserUsingPost({id})
    if(res.data.code===0){
        message.success('删除成功')
        //刷新数据
        fetchData()
    }else{
        message.error('删除失败')
    }
}

</script>

<style scoped>
#userManagePage {
}
</style>
  