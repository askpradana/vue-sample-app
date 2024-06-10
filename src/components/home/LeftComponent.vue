<script setup>
import { computed } from 'vue'
import LeftCardBorder from './helper/LeftCardBorder.vue'
import { randomUserStore } from '@/stores/randomuser'
import { fetchWeatherStore } from '@/stores/fetchWeather'
import LeftMainCard from './helper/LeftMainCard.vue'
const userStore = randomUserStore()
const weatherStore = fetchWeatherStore()

const ownerName = import.meta.env.VITE_NAME

userStore.fetchUsers()
weatherStore.fetchWeather()

const profilePhoto = computed(() => userStore.getProfilePict)
const weatherIcon = computed(() => weatherStore.getData.icon)
</script>

<template>
  <main class="flex flex-col gap-4">
    <section class="flex flex-row gap-4 justify-between">
      <LeftCardBorder class="w-1/2 group hover:scale-105 ease-in-out duration-200">
        <div class="w-full flex flex-col items-end pr-6">
          <p>Bekasi</p>
          <div class="flex flex-row gap-2 items-center">
            <p>{{ weatherStore.getData.condition }}</p>
            <img v-bind:src="'data:image/jpeg;base64,' + weatherIcon" class="w-8" />
          </div>
        </div>
      </LeftCardBorder>

      <LeftCardBorder
        class="sm:w-1/3 w-full hidden sm:block group hover:scale-105 ease-in-out duration-200"
      >
        <p>{{ ownerName }}</p>
      </LeftCardBorder>

      <LeftCardBorder class="w-auto group hover:scale-105 ease-in-out duration-200">
        <img :src="profilePhoto" alt="haha" />
      </LeftCardBorder>
    </section>

    <LeftMainCard />

    <section>
      <LeftCardBorder class="group hover:scale-105 ease-in-out duration-200">
        <p class="text-slate-400">Sponsor, anyone?</p>
      </LeftCardBorder>
    </section>
  </main>
</template>
