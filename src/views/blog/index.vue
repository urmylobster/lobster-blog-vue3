<template>
  <div class="wd-100">
    <h2 class="text-sm text-orange-600 font-bold mb-2">小龙虾🦞的博客</h2>
    <h6 class="text-tiny font-mono mb-2">You are my lobster</h6>
    <div class="item mb-4" v-for="(item) in postData.list" :key="item.postId">
      <h3 class="text-tiny py-1 flex font-bol justify-center">
        <span class="mr-0.5">{{item.postTitle}}</span>
        <DocumentTextIcon class="inline-block w-2 h-2 align-middle"/>
      </h3>
      <p class="text-tiny mt-1 leading-normal">{{item.postAuthor}}</p>
      <p class="content">
        <div v-html="item.postContent"></div>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive, toRefs } from 'vue'
import { DocumentTextIcon } from '@heroicons/vue/24/solid'
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
  /* background: #afafaf; */
  width: 100%;
  padding-top: 1.8rem;
}
.item {
  width: 8.85rem;
  min-height: 9.6rem;
  padding: 0.24rem;
  background: #0a02c00f;
  border: 2px solid #afafaf;
  border-radius: 12px;
}
.content {
  font-size: 18px;
  padding: 0.34rem 0.48rem;
  text-align: left;
}
.content div {
  white-space: pre-wrap;
}
</style>