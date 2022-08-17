<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">改变store的数据count++</button>
  <button @click="onObjClick">$patch对象形式改变store的数据</button>
  <button @click="onFuncClick">$patch改变store的数据</button>
  <button @click="actionClick">action改变store的数据</button>
  <p>count is {{ count }}</p>
  <p>getters</p>
  <p>getters: {{ store.getCountBuff}} </p>
  <p>getters: {{ store.getMsgWithThis}}</p>
  <p v-for="item in store.getAllanStoreList">{{item}}</p>
</template>

<script setup lang="ts">
import { mainStore } from '@/store';
import { storeToRefs } from 'pinia'

const store = mainStore()

let { count, msg } = storeToRefs(store)

// 1.简单数据修改
const increment = () => {
  store.count++
}

// 2.多条数据修改使用$patch的API
const onObjClick = () => {
  store.$patch({
    count: store.count + 2,
    msg: store.msg.split('').reverse().join('')
  })
}

const onFuncClick = () => {
  store.$patch(state => {
    state.count = state.count + 2;
    state.msg = state.msg.split('').reverse().join('')
  })
}

const actionClick = () => {
  store.changeState()
}
</script>


<style scoped>
</style>
