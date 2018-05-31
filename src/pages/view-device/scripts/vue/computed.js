import { mapGetters } from 'vuex'

export default {
  ...mapGetters({
    device: 'selectedDevice',
    darkMode: 'darkMode'
  })
}
