<template>
  <!-- {{postData}} -->
  <div v-for="(item) in postList" :key="item.postId">
    <h3>{{item.postTitle}}-{{item.postAuthor}}</h3>
    <p>{{item.postContent}}</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive, toRefs } from 'vue'
import { getPostsList } from '@/api/api'
import { PostData, PostRes } from '@/types/index'

let postList = ref([])
let postData = reactive({
  list: []
})
onMounted(async () => {
  const res: Array<PostData> = await getPostsList();
  console.log(res )
  postList.value = res;
  postData.list = res;
})
</script>