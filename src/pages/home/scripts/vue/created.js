export default async function () {
  console.log('Home Page Created')
  this.$store.commit('CHANGE_PAGE_TITLE', 'Mobsify')
}
