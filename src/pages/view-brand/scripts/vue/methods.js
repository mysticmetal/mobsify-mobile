import Api from '@/services/crawler'

export default {
  async viewDevice (device) {
    try {
      const success = await Api.getPhoneDetail(device.url)

      console.log('Success')
      console.log(success)

      if (success.data) {
        this.$store.commit('CHANGE_SELECTED_DEVICE', success.data)
        if (this.$store.getters.selectedDevice) {
          this.$router.push('/view-device')
        }
      }
    } catch (e) {
      console.log('Error')
      console.log(e)
    }
  },
  nextPage (v) {
    this.pageFetching = true
    console.log('Next Page Triggered')
    console.log(v)
    console.log('Current Page')
    console.log(this.currentPage)
    let url = null
    if (v !== 1) {
      url = `${this.brand.baseURL}-p${v}.php`
    } else {
      const nextPageNumberString = this.brand.baseURL.split('-').slice(0, 2).join('-')
      const neb = this.brand.baseURL.split('-')[3]
      url = `${nextPageNumberString}-${neb}.php`
    }
    console.log('URL')
    console.log(url)
    this.viewBrand(url)
  },
  async viewBrand (url) {
    const success = await Api.getBrandPhones(url)
    console.log('Success')
    console.log(success)

    if (success.data) {
      this.devices = success.data.data
      this.pageFetching = false
    }
  }
}
