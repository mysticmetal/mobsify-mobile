import EventBus from '@/utils/eventBus'

export default function () {
  const self = this
  EventBus.$on('FINISHED_SEARCHING', () => self.clearLoadings())
  EventBus.$on('CLOSE_SEARCH_BAR', () => {
    self.search = null
    self.clearLoadings()
    self.searchBox = false
  })
}
