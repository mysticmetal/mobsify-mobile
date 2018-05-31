const state = {
  darkMode: true,
  contrastAppBar: false
}

const getters = {
  darkMode: (state) => state.darkMode,
  contrastAppBar: (state) => state.contrastAppBar
}

const mutations = {
  CHANGE_DARK_MODE: (state, payload) => {
    state.darkMode = payload
  },
  CHANGE_CONTRAST_APP_BAR: (state, payload) => {
    state.contrastAppBar = payload
  }
}

export default {
  state,
  mutations,
  getters
}
