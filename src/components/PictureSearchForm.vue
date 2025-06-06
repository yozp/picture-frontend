<!--图片搜索表单-->

<!--该组件仅负责修改搜索条件，不负责数据获取与存储-->

<template>
  <div class="picture-search-form">
    <!-- 搜索表单 -->
    <a-form layout="inline" :model="searchParams" @finish="doSearch">
      <a-form-item label="关键词" name="searchText">
        <a-input
          v-model:value="searchParams.searchText"
          placeholder="从名称和简介搜索"
          allow-clear
        />
      </a-form-item>
      <a-form-item label="分类" name="category">
        <a-auto-complete
          v-model:value="searchParams.category"
          style="min-width: 180px"
          :options="categoryOptions"
          placeholder="请输入分类"
          allowClear
        />
      </a-form-item>
      <a-form-item label="标签" name="tags">
        <a-select
          v-model:value="searchParams.tags"
          style="min-width: 180px"
          :options="tagOptions"
          mode="tags"
          placeholder="请输入标签"
          allowClear
        />
      </a-form-item>
      <a-form-item label="日期" name="">
        <a-range-picker
          style="width: 400px"
          show-time
          v-model:value="dateRange"
          :placeholder="['编辑开始日期', '编辑结束时间']"
          format="YYYY/MM/DD HH:mm:ss"
          :presets="rangePresets"
          @change="onRangeChange"
        />
      </a-form-item>
      <a-form-item label="名称" name="name">
        <a-input v-model:value="searchParams.name" placeholder="请输入名称" allow-clear />
      </a-form-item>
      <a-form-item label="简介" name="introduction">
        <a-input v-model:value="searchParams.introduction" placeholder="请输入简介" allow-clear />
      </a-form-item>
      <a-form-item label="宽度" name="picWidth">
        <a-input-number v-model:value="searchParams.picWidth" />
      </a-form-item>
      <a-form-item label="高度" name="picHeight">
        <a-input-number v-model:value="searchParams.picHeight" />
      </a-form-item>
      <a-form-item label="格式" name="picFormat">
        <a-input v-model:value="searchParams.picFormat" placeholder="请输入格式" allow-clear />
      </a-form-item>
      <a-form-item>
        <a-space>
          <a-button type="primary" html-type="submit" style="width: 96px">搜索</a-button>
          <a-button html-type="reset" @click="doClear">重置</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import dayjs from 'dayjs'
import { listPictureTagCategoryUsingGet } from '@/api/pictureController'
import { message } from 'ant-design-vue'

// 定义组件的 Props 接口
interface Props {
  // onSearch 是一个回调函数，由父组件传入
  // 当子组件触发搜索时，会调用此函数并传递搜索参数
  onSearch: (searchParams: API.PictureQueryRequest) => void
}

// 使用 Vue 的 defineProps 声明组件接收的 props
// 泛型 <Props> 确保 props 符合接口定义
const props = defineProps<Props>()

// 创建响应式搜索条件对象
// 使用 reactive 创建响应式对象，类型为 API.PictureQueryRequest
// 初始值为空对象，后续可以添加搜索字段（如关键词、分页参数等）
const searchParams = reactive<API.PictureQueryRequest>({})

// 执行搜索操作的函数
const doSearch = () => {
  // 调用父组件传入的 onSearch 回调函数
  // 使用可选链操作符 ?. 防止未传递回调时出错
  // 将当前搜索条件 searchParams 作为参数传递给父组件
  props.onSearch?.(searchParams)
}

//--------------------------------------------------------------------------------

// 日期范围
const dateRange = ref<[]>([])

// 日期范围变化
const onRangeChange = (dates: any[], dateString: string[]) => {
  if (dates.length < 2) {
    searchParams.startEditTime = undefined
    searchParams.endEditTime = undefined
  } else {
    searchParams.startEditTime = dates[0].toDate()
    searchParams.endEditTime = dates[1].toDate()
  }
}

// 日期范围预设
const rangePresets = ref([
  { lable: '过去7天', value: [dayjs().add(-7, 'day'), dayjs()] },
  { lable: '过去14天', value: [dayjs().add(-14, 'day'), dayjs()] },
  { lable: '过去30天', value: [dayjs().add(-30, 'day'), dayjs()] },
  { lable: '过去90天', value: [dayjs().add(-90, 'day'), dayjs()] },
])

// 分类选项
const categoryOptions = ref<[]>([])

// 标签选项
const tagOptions = ref<[]>([])

// 获取标签和分类选项
const getTagCategoryOptions = async () => {
  const res = await listPictureTagCategoryUsingGet()
  if (res.data.code === 0 && res.data.data) {
    // 转换成下拉选项组件接受的格式
    tagOptions.value = (res.data.data.tagList ?? []).map((data: string) => {
      return {
        value: data,
        label: data,
      }
    })
    categoryOptions.value = (res.data.data.categoryList ?? []).map((data: string) => {
      return {
        value: data,
        label: data,
      }
    })
  } else {
    message.error('加载选项失败，' + res.data.message)
  }
}

// 进入页面时立刻获取标签和分类选项
onMounted(() => {
  getTagCategoryOptions()
})

// 重置搜索条件
const doClear = () => {
  // 取消所有对象的值
  Object.keys(searchParams).forEach((key) => {
    searchParams[key] = undefined
  })
  dateRange.value = []
  props.onSearch?.(searchParams)
}
</script>

<style scoped>
.picture-search-form .ant-form-item {
  margin-top: 16px;
}
</style>
