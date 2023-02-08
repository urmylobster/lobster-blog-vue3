<template>
  <div class="">
    <div v-for="(item) in postData.list" :key="item.postId">
      <h3 class="">{{item.postTitle}}-{{item.postAuthor}}</h3>
      <p class="">{{item.postContent}}</p>
    </div>
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