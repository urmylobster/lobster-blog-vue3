<template>
  <BlogHeader/>
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
import { getPostsList } from '@/api/api'
import { PostData, PostRes } from '@/types/index'

let postData: PostData = reactive({
  list: []
})

const router = useRouter()

const toDetail = (postItemId : number) => {
  router.push({
    path: '/detail',
    query: {
      id: postItemId
    }
  })
}

const addPost = () => {
  router.push('/add')
}

onMounted(async () => {
  const res = await getPostsList();
  postData.list = res;
})
</script>