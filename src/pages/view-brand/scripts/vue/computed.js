import { mapGetters } from 'vuex'

export default {
  ...mapGetters({
    brand: 'selectedBrand',
    darkMode: 'darkMode'
  })
}
