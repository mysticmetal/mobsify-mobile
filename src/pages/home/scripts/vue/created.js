import EventBus from '@/utils/eventBus'

export default async function () {
  console.log('Home Page Created')
  this.getAllBrands()
  this.$store.commit('CHANGE_PAGE_TITLE', 'Mobsify')
  const self = this
  EventBus.$on('SEARCH_CLOSE_TRIGGERED', () => self.searchCloseTriggered())
}
