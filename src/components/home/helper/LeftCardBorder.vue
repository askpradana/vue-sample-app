<script setup>
import Card from '@/components/ui/card/Card.vue'
</script>

<template>
  <Card class="h-[100px] p-2 flex-initial flex">
    <Card class="border-2 w-full h-full justify-center items-center flex">
      <slot />
    </Card>
  </Card>
</template>
