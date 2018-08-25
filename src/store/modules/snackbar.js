const state = {
  snackbarSTATE: false,
  snackbarTYPE: '',
  snackbarMSG: ''
}

const getters = {
  snackbarSTATE: (state) => state.snackbarSTATE,
  snackbarTYPE: (state) => state.snackbarTYPE,
  snackbarMSG: (state) => state.snackbarMSG
}

const mutations = {
  CHANGE_SNACKBAR_STATE: (state, payload) => {
    state.snackbarSTATE = payload
  },
  TRIGGER_SNACKBAR: (state, payload) => {
    state.snackbarSTATE = payload.state
    state.snackbarTYPE = payload.type
    state.snackbarMSG = payload.message
  }
}

export default {
  state,
  getters,
  mutations
}
