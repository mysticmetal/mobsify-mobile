const state = {
  selectedDevice: null,
  ownDevice: null,
  pageTitle: 'Mobsify',
  networkState: true,
  searchControl: 'auto'
}

const getters = {
  selectedDevice: (state) => state.selectedDevice,
  ownDevice: (state) => state.ownDevice,
  pageTitle: (state) => state.pageTitle,
  networkState: (state) => state.networkState,
  searchControl: (state) => state.searchControl
}

const mutations = {
  CHANGE_SELECTED_DEVICE: (state, payload) => {
    state.selectedDevice = payload
  },
  CHANGE_OWN_DEVICE: (state, payload) => {
    state.ownDevice = payload
  },
  CHANGE_PAGE_TITLE: (state, payload) => {
    state.pageTitle = payload
  },
  CHANGE_NETWORK_STATE: (state, payload) => {
    state.networkState = payload
  },
  CHANGE_SEARCH_CONTROL: (state, payload) => {
    state.searchControl = payload
  }
}

export default {
  state,
  mutations,
  getters
}
