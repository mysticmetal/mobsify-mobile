export default {
  apiCall (device) {
    console.log('Device is ' + device)
  },
  searchClose () {
    this.search = null
    this.searchBox = !this.searchBox
  }
}
