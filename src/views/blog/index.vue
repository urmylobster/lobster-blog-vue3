<template>
  <div class="list"
    v-for="(item) in postData.list" :key="item.postId">
    <h3>{{item.postTitle}}-{{item.postAuthor}}</h3>
    <p>{{item.postContent}}</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive, toRefs } from 'vue'
import { getPostsList } from '@/api/api'
import { PostData, PostRes } from '@/types/index'

let postData: PostData = reactive({
  list: []
})

onMounted(async () => {
  const res = await getPostsList();
  postData.list = res;
})
</script>

<style scoped>
.list {
  margin-bottom: 0.48rem;
}
.list h3 {
  font-size: 16px;
}
.list p {
  font-size: 14px;
}
</style>