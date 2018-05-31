export default function () {
  console.log('View Page is Destroyed')
  this.$store.commit('CHANGE_SELECTED_DEVICE', null)
}
