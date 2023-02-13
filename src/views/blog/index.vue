<template>
  <div class="wd-100">
    <h2 class="text-sm text-orange-600 font-bold mb-2">小龙虾🦞的博客</h2>
    <h6 class="text-tiny font-mono mb-2">You are my lobster</h6>
    <div class="mb-4" v-for="(item) in postData.list" :key="item.postId">
      <h3 class="text-tiny py-1 flex font-bold justify-center">
        <span class="mr-0.5 font-semibold" @click="toDetail(item.postId)">{{item.postTitle}}</span>
      </h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DocumentTextIcon } from '@heroicons/vue/24/solid'
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
</style>