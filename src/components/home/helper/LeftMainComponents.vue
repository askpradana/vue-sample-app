<script setup>
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
  formData.append('image', imageFile.value) // Append the actual file object
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
    .catch((error) => console.error('Error:', error))
}
</script>

<template>
  <section>
    <div v-if="!image">
      <p>Watermark</p>
      <input type="file" accept="image/*" @change="handleFileChange" />
    </div>
    <div v-if="image" class="flex flex-col gap-4">
      <img :src="image" alt="Selected Image" />
      <input type="text" v-model="text" placeholder="Watermark text" />
      <button @click="image = ''">Remove image</button>
      <button @click="uploadImg">Upload</button>
    </div>
  </section>
</template>
