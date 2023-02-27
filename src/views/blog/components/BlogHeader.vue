<template>
   <header class="py-4">
    <div class="max-w-2xl mx-auto px-4 flex items-center justify-between relative">
      <a href="/" class="flex items-center">
        🦞<p class="ml-2 font-bold text-3xl text-orange-600">小龙虾 Lobster</p>
      </a>
      <div class="rounded-lg border-2 px-2 my-2 border-orange-400">
        <MagnifyingGlassIcon class="inline-block text-orange-600 w-4 h-4 align-middle" />
      </div>
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
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

const { toIndex } = useToIndex()
</script>