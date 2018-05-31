import EventBus from '@/utils/eventBus'

export default {
  apiCall (device) {
    if (this.$store.getters.searchControl === 'button') {
      this.searchBtnLoading = true
    }
    this.searching = true
    this.$refs.searchInput.$el.blur()
    EventBus.$emit('SEARCH_TRIGGERED', device)
  },
  searchClose () {
    this.search = null
    this.searchBox = !this.searchBox
    this.clearLoadings()
  },
  clearLoadings () {
    this.searchLoading = false
    this.searchBtnLoading = false
    this.searching = false
  }
}
