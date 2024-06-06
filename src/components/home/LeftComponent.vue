<script setup>
import { computed } from 'vue'
import LeftCardBorder from './helper/LeftCardBorder.vue'
import { randomUserStore } from '@/stores/randomuser'
import LeftMainCard from './helper/LeftMainCard.vue'
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

    <section class="flex flex-auto"></section>
    <LeftMainCard />
    <section>
      <LeftCardBorder>
        <p class="text-slate-400">Sponsor, anyone?</p>
      </LeftCardBorder>
    </section>
  </main>
</template>
