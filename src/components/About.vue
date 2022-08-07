<template>
  <p>hello about</p>
  <p>你好about</p>
  <p>{{msg}}</p>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref('测试路由')
</script>
