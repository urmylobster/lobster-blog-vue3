<template>
  <p>hello about</p>
  <p>你好about</p>
  <p>{{msg}}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const msg = ref('测试路由')
</script>
