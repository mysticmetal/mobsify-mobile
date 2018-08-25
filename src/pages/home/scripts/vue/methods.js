import EventBus from '@/utils/eventBus'
import Api from '@/services/crawler'

export default {
  async apicall (data) {
    this.devices = []
    this.hasNoResult = false
    try {
      const success = await Api.search(data)

      console.log('Success')
      console.log(success)

      if (success.data.length > 0) {
        this.devices = success.data
      } else {
        this.hasNoResult = true
      }
      EventBus.$emit('FINISHED_SEARCHING')
    } catch (e) {
      EventBus.$emit('FINISHED_SEARCHING')
      console.log('Error')
      console.log(e)
      this.$store.commit('TRIGGER_SNACKBAR', {
        state: true,
        type: 'error',
        message: `There was some error when fetching ${data}.`
      })
    }
  },
  async viewDevice (device) {
    try {
      const success = await Api.getPhoneDetail(device.url)

      console.log('Success')
      console.log(success)

      if (success.data) {
        this.$store.commit('CHANGE_SELECTED_DEVICE', success.data)
        EventBus.$emit('CLOSE_SEARCH_BAR')
        if (this.$store.getters.selectedDevice) {
          this.$router.push('/view-device')
        }
      }
    } catch (e) {
      console.log('Error')
      console.log(e)
      this.$store.commit('TRIGGER_SNACKBAR', {
        state: true,
        type: 'error',
        message: `There was some error when getting Information about ${device.name}.`
      })
    }
  },
  async getAllBrands () {
    this.brandLoading = true

    try {
      const success = await Api.getBrands()

      console.log('Success')
      console.log(success)

      if (success.data.length > 0) {
        this.brands = success.data
      }
    } catch (e) {
      console.log('Error')
      console.log(e)
      this.$store.commit('TRIGGER_SNACKBAR', {
        state: true,
        type: 'error',
        message: `Error when fetching all brands phones.`
      })
    } finally {
      this.brandLoading = false
    }
  },
  async viewBrand (brand) {
    console.log('Brand')
    console.log(brand)

    try {
      const success = await Api.getBrandPhones(brand.url)
      console.log('Success')
      console.log(success)

      if (success.data) {
        const phones = brand.devices
        const pages = Math.ceil(phones / 40)
        let baseURL = ''
        if (success.data.next) {
          const originalURL = success.data.next
          baseURL = originalURL.split('-').slice(0, 5).join('-')
        }
        this.$store.commit('CHANGE_SELECTED_BRAND', {
          name: brand.name,
          phones: success.data.data,
          totalItems: phones,
          totalPages: pages,
          baseURL
        })
        if (this.$store.getters.selectedBrand) {
          this.$router.push('/view-brand')
        }
      }
    } catch (e) {
      console.log('Error')
      console.log(e)
      this.$store.commit('TRIGGER_SNACKBAR', {
        state: true,
        type: 'error',
        message: `Error when fetching ${brand.name}'s Phones.`
      })
    }
  },
  searchCloseTriggered () {
    if (this.hasNoResult) {
      this.getAllBrands()
      this.hasNoResult = false
    }
  }
}
