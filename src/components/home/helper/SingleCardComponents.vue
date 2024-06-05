<script setup>
import Card from '@/components/ui/card/Card.vue'
defineProps({
  title: String,
  imageSvg: String,
  subTitle: String
})
</script>

<template>
  <Card
    class="flex flex-row justify-between px-4 py-2 rounded-t-md rounded-b-none group cursor-pointer hover:scale-105 ease-in-out duration-75"
  >
    <p class="text-slate-400 group-hover:text-black">{{ title }}</p>
    <img :src="imageSvg" class="group-hover:hidden block" />
    <p class="group-hover:block hidden">{{ subTitle }}</p>
  </Card>
</template>
