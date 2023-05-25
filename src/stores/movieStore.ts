import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const API_KEY = '4a3b711b'
const baseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}`

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [],
    totalResults: 0,
    loadedPages: 0,
    maxPages: null as null | number,
    loadingPage: false,
    searchTerm: '',
    year: ''
  }),

  getters: {
    movieList: (state) => state.movies
  },
  actions: {
    async searchMovies(searchTerm: string, year: string) {
      try {
        this.resetStats()
        const queryString = []

        if (searchTerm) {
          this.searchTerm = searchTerm
          queryString.push(`s=${searchTerm}`)
        }

        if (year) {
          this.year = year
          queryString.push(`y=${year}`)
        }

        const url = `${baseUrl}&${queryString.join('&')}&type=movie`
        const response = await fetch(url)

        if (response.status === 200) {
          const data = await response.json()

          if (data.Response === 'True') {
            this.totalResults = ++data.totalResults
            this.loadedPages++

            if (!this.maxPages) {
              this.maxPages = Math.ceil(data.totalResults / data.Search?.length)
            }

            if (data.Search === undefined) {
              throw new Error('No movies found')
            }

            this.movies = data.Search
          } else {
            this.resetStats()
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },

    resetStats() {
      this.movies = []
      this.totalResults = 0
      this.loadedPages = 0
      this.maxPages = null
      this.loadingPage = false
      this.searchTerm = ''
      this.year = ''
    },

    async appendNextPage(searchTerm: string, year: string) {
      if (this.loadingPage) {
        return
      }

      this.loadingPage = true

      const queryString = []

      if (this.searchTerm) queryString.push(`s=${this.searchTerm}`)
      if (this.year) queryString.push(`y=${this.year}`)
      if (this.loadedPages) queryString.push(`page=${this.loadedPages + 1}`)

      const url = `${baseUrl}&${queryString.join('&')}&type=movie`
      const response = await fetch(url)

      if (response.status === 200) {
        const data = await response.json()
        this.totalResults = ++data.totalResults
        this.loadedPages++

        if (!this.maxPages) {
          this.maxPages = Math.ceil(data.totalResults / data.Search.length)
        }

        if (data.Search === undefined) {
          throw new Error('No movies found')
        }

        this.movies = [...this.movies, ...data.Search]
        this.loadingPage = false
      }
    }
  }
})
