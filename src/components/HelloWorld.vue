<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">count ++</button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <p>count is {{count}}</p>
  <!-- {{postData}} -->
  <div v-for="(item) in postData.list" :key="item.postId">
    <h3>{{item.postTitle}}</h3>
    <h3>{{item.postAuthor}}</h3>
    <p>{{item.postContent}}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import { getPostsList } from '@/api/api'
import { PostData } from '@/types/index'

defineProps<{ msg: string }>()

const store = useStore(key)

const postData: PostData = reactive({
  list: []
})

const postsList = {...toRefs(postData)};
const count = computed(() => store.state.count)

const increment = () => {
  store.commit('increment')
}

onMounted(async () => {
  const res = await getPostsList();
  postData.list = res.data.data;
})
</script>


<style scoped>
</style>
