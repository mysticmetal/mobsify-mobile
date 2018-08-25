import { mapGetters } from 'vuex'

export default {
  ...mapGetters({
    snackbarTYPE: 'snackbarTYPE',
    snackbarMSG: 'snackbarMSG'
  }),
  snackbarSTATE: {
    get () {
      return this.$store.getters.snackbarSTATE
    },
    set (v) {
      this.$store.commit('CHANGE_SNACKBAR_STATE', v)
    }
  }
}
