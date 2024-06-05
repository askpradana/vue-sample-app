import { defineStore } from 'pinia'

export const randomUserStore = defineStore('randomuser', {
  state: () => ({
    users: {} | null,
    isLoading: false
  }),
  getters: {
    getProfilePict: (state) => state.users?.[0]?.picture?.medium,
    getIsLoading: (state) => state.isLoading
  },
  actions: {
    async fetchUsers() {
      this.isLoading = true
      try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        this.users = data.results
        this.isLoading = false
      } catch (error) {
        console.log(error)
        this.isLoading = false
      }
    }
  }
})
