export default function () {
  console.log('View Page Created')
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  if (!this.device) {
    this.$router.go(-1)
  }
  this.$store.commit('CHANGE_PAGE_TITLE', this.device.title)
  this.device.spec_detail.forEach((spec) => {
    if (spec.category.toLowerCase() === 'misc') {
      spec.specs.forEach((detail) => {
        if (detail.name.toLowerCase() === 'price') {
          this.toLocalCurrency(detail.value)
        }
      })
    }
  })
}
