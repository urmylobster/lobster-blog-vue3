<template>
  <div class="wd-100">
    <h2 class="text-sm text-orange-600 font-bold">小龙虾🦞的博客</h2>
    <h6 class="text-xs font-mono mb-2">You are my lobster</h6>
    <div class="item" v-for="(item) in postData.list" :key="item.postId">
      <h3 class="title">{{item.postTitle}}
        <p>{{item.postAuthor}}</p>
      </h3>
      <p class="content">
        <div v-html="item.postContent"></div>
      </p>
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
  width: 8.25rem;
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

.title p {
  line-height: 1.5;
}
.content {
  font-size: 18px;
  padding: 0 0.48rem;
  text-align: left;
  text-indent: 2em;
}
</style>