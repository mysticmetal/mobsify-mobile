export default {
  darkMode: {
    get () {
      return this.$store.getters.darkMode
    },
    set (v) {
      localStorage.setItem('darkMode', JSON.stringify(v))
      this.$store.commit('CHANGE_DARK_MODE', v)
    }
  },
  contrastAppBar: {
    get () {
      return this.$store.getters.contrastAppBar
    },
    set (v) {
      localStorage.setItem('contrastAppBar', JSON.stringify(v))
      this.$store.commit('CHANGE_CONTRAST_APP_BAR', v)
    }
  },
  searchControl: {
    get () {
      return this.$store.getters.searchControl
    },
    set (v) {
      localStorage.setItem('searchControl', JSON.stringify(v))
      this.$store.commit('CHANGE_SEARCH_CONTROL', v)
    }
  }
}
