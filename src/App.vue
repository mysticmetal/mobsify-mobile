<template>
  <v-app :dark="darkMode">
    <appbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-fade-transition>
      <no-network v-show="!networkState"/>
    </v-fade-transition>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import axios from 'axios'
  import Api from '@/services/crawler'
  import appbar from '@/components/appbar'
  import noNetwork from '@/components/no-network'

  export default {
    data () {
      return {
        cordova: Vue.cordova
      }
    },
    computed: {
      ...mapGetters({
        darkMode: 'darkMode',
        networkState: 'networkState'
      })
    },
    components: {
      appbar,
      'no-network': noNetwork
    },
    created () {
      const localDarkMode = JSON.parse(localStorage.getItem('darkMode'))
      if (localDarkMode !== null) this.$store.commit('CHANGE_DARK_MODE', localDarkMode)
      const localContrastAppBar = JSON.parse(localStorage.getItem('contrastAppBar'))
      if (localContrastAppBar !== null) this.$store.commit('CHANGE_CONTRAST_APP_BAR', localContrastAppBar)
      const localSearchControl = JSON.parse(localStorage.getItem('searchControl'))
      if (localSearchControl !== null) this.$store.commit('CHANGE_SEARCH_CONTROL', localSearchControl)
      const localCountryCode = JSON.parse(localStorage.getItem('country_code'))
      if (!localCountryCode) {
        this.getCountryCode()
      }
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }
        const localOwnDevice = JSON.parse(localStorage.getItem('own_device'))
        if (localOwnDevice) {
          this.$store.commit('CHANGE_OWN_DEVICE', localOwnDevice)
        } else {
          this.getThisDeviceInfo(this.cordova.device.model)
        }

        document.addEventListener('offline', this.networkOffline, false)
        document.addEventListener('online', this.networkOnline, false)
      },
      async getThisDeviceInfo (data) {
        try {
          const success = await Api.search(data)

          console.log('Success')
          console.log(success)

          if (success.data.length > 0) {
            this.$store.commit('CHANGE_OWN_DEVICE', success.data[0])
            localStorage.setItem('own_device', JSON.stringify(success.data[0]))
          }
        } catch (e) {
          console.log('Error')
          console.log(e)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      },
      networkOffline () {
        this.$store.commit('CHANGE_NETWORK_STATE', false)
      },
      networkOnline () {
        this.$store.commit('CHANGE_NETWORK_STATE', true)
      },
      async getCountryCode () {
        const success = await axios.get('http://ipinfo.io')

        if (success.data) {
          console.log('IP Info')
          console.log(success.data)
          localStorage.setItem('country_code', JSON.stringify(success.data.country))
        }
      }
    }
  }
</script>

<style>
html {
  overflow: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 0px;
  /* remove scrollbar space */
  background: transparent;
  /* optional: just make scrollbar invisible */
}

/* optional: show position indicator in red */

::-webkit-scrollbar-thumb {
  background: #FF0000;
}
</style>
