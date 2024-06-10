import { defineStore } from 'pinia'

export const fetchWeatherStore = defineStore('fetchWeather', {
  state: () => ({
    isLoading: false,
    link: import.meta.env.VITE_URL_OPENWEATHER_LINK,
    iconLink: import.meta.env.VITE_URL_OPENWEATHER_ICON,
    data: {} | null
  }),
  getters: {
    getIsLoading: (state) => state.isLoading,
    getData: (state) => state.data
  },
  actions: {
    async fetchWeather() {
      this.isLoading = true

      const response = await fetch(this.link, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const responseData = await response.json()
      if (responseData) {
        this.data = responseData
        this.isLoading = false
      } else {
        alert('Something went wrong')
        this.isLoading = false
      }
    }
  }
})
