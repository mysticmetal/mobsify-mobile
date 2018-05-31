import Api from '@/services/crawler'

export default {
  async apicall (data) {
    if (this.$store.getters.searchControl === 'button') {
      this.searchBtnLoading = true
    }
    this.searching = true
    this.$refs.searchInput.$el.blur()
    try {
      const success = await Api.search(data)

      console.log('Success')
      console.log(success)

      if (success.data.length > 0) {
        this.devices = success.data
        this.searchLoading = false
        this.searchBtnLoading = false
        this.searching = false
      } else {
        this.hasNoResult = true
        this.searchLoading = false
        this.searchBtnLoading = false
        this.searching = false
      }
    } catch (e) {
      console.log('Error')
      console.log(e)
    }
  },
  async viewDevice (device) {
    try {
      const success = await Api.getPhoneDetail(device.url)

      console.log('Success')
      console.log(success)

      if (success.data) {
        this.$store.commit('CHANGE_SELECTED_DEVICE', success.data)
        localStorage.setItem('own_device', JSON.stringify(success.data))
        if (this.$store.getters.selectedDevice) {
          this.$router.push('/view-device')
        }
      }
    } catch (e) {
      console.log('Error')
      console.log(e)
    }
  }
}
