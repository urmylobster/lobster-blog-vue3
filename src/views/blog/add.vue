<template>
  <div class="container">
    <el-form :model="form" label-width="120px">
      <el-form-item label="标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="form.content" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { addPosts } from '@/api/api'

const form = reactive({
  title: '',
  name: '',
  content: '',
})

const router = useRouter()

const onSubmit = async () => {
  let params = {
    postTitle: form.title,
    postAuthor: form.name,
    postContent: form.content,
  }

  const res = await addPosts(params)

  if(res) {
    ElMessage({
      message: "添加成功",
      type: "success"
    });
    router.replace('/blog')
  }
}
</script>

<style scoped>
.container {
  width: 100%;

}
</style>