<script setup>
import Card from '@/components/ui/card/Card.vue'
import LeftCardBorder from './LeftCardBorder.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <LeftCardBorder class="sm:h-full h-[300px] w-full group">
    <div class="flex flex-row justify-between w-full h-full">
      <div class="flex flex-col w-full justify-end p-4 gap-4">
        <RouterView></RouterView>
      </div>

      <div
        class="bg-slate-200 w-full h-full flex flex-col gap-4 justify-center items-center px-4 py-2"
      >
        <RouterLink to="/left" class="w-1/2">
          <Card
            class="w-full flex justify-center py-2 hover:scale-105 ease-in-out duration-200 group"
          >
            ✌️
          </Card>
        </RouterLink>
        <RouterLink to="/kedua" class="w-1/2">
          <Card
            class="w-full flex justify-center py-2 hover:scale-105 ease-in-out duration-200 group"
          >
            👍
          </Card>
        </RouterLink>
        <RouterLink to="/ketiga" class="w-1/2">
          <Card
            class="w-full flex justify-center py-2 hover:scale-105 ease-in-out duration-200 group"
          >
            🥂
          </Card>
        </RouterLink>
      </div>
    </div>
  </LeftCardBorder>
</template>
