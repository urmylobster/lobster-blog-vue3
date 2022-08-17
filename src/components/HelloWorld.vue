<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">改变store的数据</button>
  <p>count is {{ count }}</p>
</template>

<script setup lang="ts">
import { mainStore } from '@/store';
import { storeToRefs } from 'pinia'

const store = mainStore()

// 1.直接解构失去响应性
// let { count } = store
// let { msg } = store

// const increment = () => {
//   count++
//   msg = "hello I changed view don't know"
//   console.log(count, msg)
// }

// 2.用storeToRefs包裹保持响应性
let { count, msg }  = storeToRefs(store)

const increment = () => {
  count.value++
  msg.value = "hello I changed pinia"
  console.log(count, msg)
}
</script>


<style scoped>
</style>
