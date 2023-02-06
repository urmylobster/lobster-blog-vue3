<template>
  <div v-for="(item) in postData.list" :key="item.postId">
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