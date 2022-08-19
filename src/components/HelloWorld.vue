<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">count ++</button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <p>count is {{count}}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'


defineProps<{ msg: string }>()

const store = useStore(key)
const count = computed(() => store.state.count)

const increment = () => {
  store.commit('increment')
}


</script>


<style scoped>
</style>
