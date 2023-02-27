<template>
  <BlogHeader />
  <div class="content py-2 mx-auto">
    <div class="">
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
  </div>
</template>

<script lang="ts" setup>
import { addPosts } from '@/api/api'
import { ElMessage } from 'element-plus';

const form = reactive({
  title: '',
  name: 'GitHub',
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
      type: "success",
      customClass: "lobster-msg"
    });
    router.replace('/blog')
  }
}
</script>

<style scoped>
.content {
  min-width: 20rem;
}
.action-button {
  width: 48%;
}
</style>