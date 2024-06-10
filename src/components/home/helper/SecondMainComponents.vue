<script setup>
import Input from '@/components/ui/input/Input.vue'
import Button from '../../ui/button/Button.vue'
import { fetchInstagramStore } from '@/stores/fetchInstagram'

const store = fetchInstagramStore()
</script>

<template>
  <section v-if="store.isLoading">Loading...</section>

  <section v-else-if="!store.isLoading && !store.downloadLink == ''" class="flex flex-col gap-4">
    <Button v-if="store.downloadLink" @click="store.downloadVideo">Download Video</Button>
    <Button @click="store.downloadAnotherVideo"> Download another </Button>
  </section>

  <section v-else>
    <p class="text-3xl font-semibold tracking-tight transition-colors mb-4">
      Instagram reels downloader
    </p>
    <Input type="text" placeholder="Instagram link" v-model="store.url" class="mb-4" />
    <Button @click="store.fetchInstagram"> Download </Button>
  </section>
</template>
