<script setup>
import Button from '@/components/ui/button/Button.vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { ref } from 'vue'

const urlUpload = import.meta.env.VITE_URL_UPLOAD
const text = ref('')
const image = ref('')
const imageFile = ref(null)

function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    image.value = URL.createObjectURL(file)
    imageFile.value = file
  }
}

function uploadImg() {
  if (!imageFile.value) {
    alert('Please select an image to upload.')
    return
  }

  const formData = new FormData()
  formData.append('image', imageFile.value)
  formData.append('text', text.value)

  fetch(urlUpload, {
    method: 'POST',
    body: formData
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = text.value + '.png'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    })
    .catch(() => {
      alert('try again later, my backend probably down right now')
    })
}
</script>

<template>
  <section>
    <div v-if="!image">
      <h2 class="sm:text-3xl text-xl font-semibold tracking-tight transition-colors mb-4">
        Watermark
      </h2>
      <Label for="file">Please upload picture format only</Label>
      <Input id="file" type="file" accept="image/*" @change="handleFileChange" />
    </div>
    <div v-if="image" class="flex flex-col gap-4">
      <img :src="image" alt="Selected Image" />
      <Input type="text" v-model="text" placeholder="Watermark text" />
      <Button @click="image = ''">Remove image</Button>
      <Button @click="uploadImg">Upload</Button>
    </div>
  </section>
</template>
