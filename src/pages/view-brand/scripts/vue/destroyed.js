export default function () {
  console.log('View Brand is Destroyed')
  this.$store.commit('CHANGE_SELECTED_BRAND', null)
}
