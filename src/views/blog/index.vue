<template>
  <div class="wd-100">
    <div class="item" v-for="(item) in postData.list" :key="item.postId">
      <h3 class="title">{{item.postTitle}}-{{item.postAuthor}}</h3>
      <p class="content">{{item.postContent}}</p>
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

<style scoped>
.wd-100 {
  width: 100%;
  padding-top: 1.8rem;
}
.item {
  width: 9.2rem;
  min-height: 9.6rem;
  margin-bottom: 26px;
  border: 2px solid #afafaf;
  border-radius: 12px;
}

.title {
  font-size: 20px;
  font-weight: bolder;
  padding: 0.35rem 0;
}
.content {
  font-size: 18px;
  padding: 0 0.2rem;
  text-align: left;
  text-indent: 2em;
}
</style>