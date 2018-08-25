export default {
  closeSnackbar () {
    this.$store.commit('TRIGGER_SNACKBAR', {
      state: false,
      type: '',
      message: ''
    })
  }
}
