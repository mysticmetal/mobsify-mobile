export default function () {
  console.log('View Page Created')
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  this.$store.commit('CHANGE_PAGE_TITLE', 'About')
}
