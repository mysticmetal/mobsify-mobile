export default {
  search (v) {
    if (this.$store.getters.searchControl === 'auto') {
      if (v) {
        this.searchLoading = true
        if (this.searchTimeOut) {
          clearTimeout(this.searchTimeOut)
        }
        this.searchTimeOut = setTimeout(() => {
          this.apiCall(v)
        }, 1000)
      }
    }
  }
}
