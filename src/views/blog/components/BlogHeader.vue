<template>
  <h2 class="mt-6 text-sm text-orange-600 font-bold mb-2">
    <HomeIcon class="inline-block w-4 h-4 align-middle" @click="toIndex"/>
    小龙虾🦞的博客
  </h2>
</template>

<script lang="ts" setup>
import useToIndex from '../compositions/useToIndex';
import { HomeIcon } from '@heroicons/vue/24/solid'

const { toIndex } = useToIndex()
</script>