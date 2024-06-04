<script setup>
import LeftComponent from '@/components/home/LeftComponent.vue'
import RightComponent from '@/components/home/RightComponent.vue'
</script>

<template>
  <main class="flex flex-row bg-slate-200 w-screen h-screen p-4">
    <LeftComponent class="w-2/3 pr-2" />
    <RightComponent class="w-1/3 pl-2" />
  </main>
</template>
