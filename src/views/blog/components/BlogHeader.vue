<template>
   <header class="py-4">
    <div class="max-w-2xl mx-auto px-4 flex items-center relative">
      <a href="/" class="flex items-center">
        🦞<p class="ml-2 font-bold text-3xl text-orange-600">小龙虾 Lobster</p>
      </a>
    </div>
  </header>
  <section class="max-w-2xl mx-auto px-2">
    <div class="flex items-center text-3xl justify-center pt-3 pb-4 border-b border-gray-100">
      <i> - You are my lobster</i>
    </div>
  </section>
</template>

<script lang="ts" setup>
import useToIndex from '../compositions/useToIndex';
import { HomeIcon } from '@heroicons/vue/24/solid'

const { toIndex } = useToIndex()
</script>