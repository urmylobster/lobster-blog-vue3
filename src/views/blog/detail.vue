<template>
  <BlogHeader />
  <div class="max-w-2xl mx-auto mt-2 px-4">
    <h2 class="text-3xl font-medium text-left px-4">
      <p class="text-orange-600 py-1 flex font-bold justify-center px-4">
        {{post.postTitle}}<br>
        <DocumentTextIcon
          class="inline-block w-6 h-6 align-middle"
          @click="toEditPost(post.postId)"/>
      </p>
      <p class="my-2 flex items-center justify-center">
        <span class="text-sm  text-gray-400">2023-02-24</span>
      </p>
    </h2>
    <p class="px-4 py-2 text-left mb-4 ">
      <div class="whitespace-pre-wrap" v-html="post.postContent"></div>
    </p>
  </div>
</template>

<script lang="ts" setup>
import useGetPostDetail from './compositions/useGetPostDetail';
import { DocumentTextIcon } from '@heroicons/vue/24/solid'

const router = useRouter()
const route = useRoute()

const toEditPost = (postItemId : number) => {
  router.push({
    path: '/edit',
    query: {
      id: postItemId
    }
  })
}
const { post, getPostDetail } = useGetPostDetail()

const getPageInit = async () => {
  const postId  = route.query.id
  await getPostDetail({ id: postId })
}

onMounted(() => {
  getPageInit()
})
</script>
