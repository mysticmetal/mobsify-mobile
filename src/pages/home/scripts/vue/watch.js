export default {
  search (v) {
    if (this.$store.getters.searchControl === 'auto') {
      this.devices = []
      this.hasNoResult = false
      if (this.searchTimeOut) {
        clearTimeout(this.searchTimeOut)
      }
      this.searchTimeOut = setTimeout(() => {
        this.searchLoading = true
        this.apicall(v)
      }, 1000)
    }
  }
}
