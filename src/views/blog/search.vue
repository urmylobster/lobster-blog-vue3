<template>
  <div class="mx-auto mt-2 pt-4">
    <input class="w-3/4 rounded-lg w-2xl border-2 mx-24 px-12 py-4 border-orange-400"
      type="search" name="keywords" id=""
      placeholder="请输入要搜索的文章标题"
      v-model="keywords" @change="searchPostByTitle"/>
  </div>
  <div class="max-w-2xl mx-auto mt-12 px-4">
    <article class="mb-12 px-4" v-for="(item) in postData.list" :key="item.postId">
      <h2 class="text-3xl font-medium text-left">
        <a class="hover:underline hover:text-red-600 underline-offset-4 text-orange-600" @click="toDetail(item.postId)">
          {{item.postTitle}}<br>
        </a>
        <p class="my-2 flex items-center">
          <span class="text-sm  text-gray-400">{{item.postDate}}</span>
        </p>
      </h2>
      <p class="mt-2 text-sm text-gray-600 text-left">{{item.postContent.slice(0,40) + '...'}}</p>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { searchPosts } from '@/api/api'
import { PostData, PostRes } from '@/types/index'

const router = useRouter()

let postData : PostData = reactive({
  list: []
})
let keywords = ref('')

const searchPostByTitle = async () => {
  const res = await searchPosts({ title: keywords.value });
  postData.list = res;
}

const toDetail = (postItemId : number) => {
  router.push({
    path: '/detail',
    query: {
      id: postItemId
    }
  })
}
</script>