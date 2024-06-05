<script setup>
import { computed } from 'vue'
import LeftCardBorder from './helper/LeftCardBorder.vue'
import { randomUserStore } from '@/stores/randomuser'
import Button from '../ui/button/Button.vue'
import Card from '../ui/card/Card.vue'
const store = randomUserStore()

const ownerName = import.meta.env.VITE_NAME

store.fetchUsers()

const profilePhoto = computed(() => store.getProfilePict)
</script>

<template>
  <main class="flex flex-col gap-4">
    <section class="flex flex-row gap-4 justify-between">
      <LeftCardBorder class="w-1/2">
        <div class="w-full flex flex-col items-end pr-6">
          <p>Bekasi</p>
          <div class="flex flex-row gap-4">
            <p>01:11</p>
            <p>12º C</p>
          </div>
        </div>
      </LeftCardBorder>

      <LeftCardBorder class="w-1/3">
        <p>{{ ownerName }}</p>
      </LeftCardBorder>

      <LeftCardBorder class="w-auto">
        <img :src="profilePhoto" alt="haha" />
      </LeftCardBorder>
    </section>

    <section class="flex flex-auto">
      <LeftCardBorder class="h-full w-full group">
        <div class="flex flex-row justify-between w-full h-full">
          <div class="flex flex-col w-full justify-end p-4">
            <h2 class="text-3xl font-semibold tracking-tight pb-2">Ad Astra</h2>
            <p class="text-sm text-muted-foreground pb-4">
              The phrase "Ad Astra" has become a powerful symbol of striving for excellence,
              perseverance, and the pursuit of one's goals. It is often used to inspire people to
              push beyond their limits and reach for the stars, both literally and metaphorically.
            </p>
            <Button variant="ghost" class="flex justify-start">Take the test</Button>
          </div>

          <div
            class="bg-slate-200 w-full h-full flex flex-col gap-4 justify-center items-center px-4 py-2"
          >
            <!-- TODO Pake vue router buat nampilin data yag di kiri, kaya vuejs home about -->
            <Card
              class="w-full flex justify-center py-2 hover:scale-105 ease-in-out duration-200 group"
            >
              ✌️
            </Card>
            <p>👍</p>
            <p>🥂</p>
          </div>
        </div>
      </LeftCardBorder>
    </section>

    <section>
      <LeftCardBorder>
        <p class="text-slate-400">Sponsor, anyone?</p>
      </LeftCardBorder>
    </section>
  </main>
</template>
