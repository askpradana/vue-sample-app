import { defineStore } from 'pinia'

export const fetchInstagramStore = defineStore('fetchInstagram', {
  state: () => ({
    isLoading: false,
    url: '',
    link: import.meta.env.VITE_URL_INSTAGRAM_LINK,
    downloadLink: String | ''
  }),

  getters: {
    getIsLoading: (state) => state.isLoading,
    getData: (state) => state.data
  },
  actions: {
    async fetchInstagram() {
      this.isLoading = true
      if (!this.url) {
        alert('Please enter a valid URL')
        return
      }
      if (!this.url.includes('instagram.com/reel/')) {
        alert('Please enter a valid Instagram Url')
        return
      }

      const response = await fetch(this.link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          link: this.url
        })
      })

      const data = await response.json()

      console.log(data)
      console.log(data.download)

      if (data.download) {
        this.downloadLink = data.download
        this.isLoading = false
      } else {
        alert('Something went wrong')
        this.isLoading = false
      }
    },
    downloadVideo() {
      const link = document.createElement('a')
      link.href = this.downloadLink
      link.download = 'download.mp4'
      link.click()
    },
    downloadAnotherVideo() {
      this.url = ''
      this.downloadLink = ''
    }
  }
})
