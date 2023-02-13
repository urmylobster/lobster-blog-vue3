<template>
  <BlogHeader />
  <div class="text-editor">
    <el-form
      :model="form"
      size="large"
      label-width="20"
      label-position="top">
      <el-form-item label="标题">
        <el-input
          v-model="form.title" />
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          type="textarea"
          v-model="form.content"
          :autosize="{ minRows: 20, maxRows: 50 }"/>
      </el-form-item>
      <el-form-item>
        <el-button class="action-button" type="primary" @click="onSubmit">提交</el-button>
        <el-button class="action-button">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
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
.text-editor {
  padding: 0.6rem;
  min-width: 9.6rem;
}
.action-button {
  min-width: 4.04rem;
}
</style>