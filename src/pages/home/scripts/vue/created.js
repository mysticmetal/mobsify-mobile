export default async function () {
  console.log('Home Page Created')
  this.getAllBrands()
  this.$store.commit('CHANGE_PAGE_TITLE', 'Mobsify')
}
