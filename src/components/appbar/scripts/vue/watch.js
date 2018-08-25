export default {
  search (v) {
    if (this.searchControl === 'auto') {
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
