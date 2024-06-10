<script setup>
import LeftComponent from '@/components/home/LeftComponent.vue'
import RightComponent from '@/components/home/RightComponent.vue'
</script>

<template>
  <main class="flex flex-col sm:flex-row bg-slate-200 w-screen sm:h-screen p-4">
    <LeftComponent class="sm:w-2/3 w-full sm:pr-2 mb-8 sm:mb-0" />
    <RightComponent class="sm:w-1/3 w-full pl-2" />
  </main>
</template>
