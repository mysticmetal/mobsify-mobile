export default function () {
  console.log('View Brand Created')
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  if (!this.brand) {
    this.$router.go(-1)
  }
  console.log('Selected Brand')
  console.log(this.brand)
  this.devices = this.brand.phones
  this.$store.commit('CHANGE_PAGE_TITLE', `${this.brand.name} Phones`)
}
