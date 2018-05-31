// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.css'
import VueCordova from 'vue-cordova'
import VueHead from 'vue-head'
import cc from 'currency-convert'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify, {
  theme: {
    primary: colors.deepOrange.base,
    secondary: colors.orange.lighten2,
    accent: colors.deepOrange.base,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  }
})
Vue.config.productionTip = false
Vue.use(VueCordova)
Vue.use(VueHead)

Vue.filter('toLocalCurrency', function (name, value) {
  if (name.toLowerCase() === 'price') {
    console.log('Originam Value')
    console.log(value)
    console.log('Only Numbers')
    console.log(value.replace(/^\D+/g, ''))
    let amount = parseInt(value.replace(/^\D+/g, '').split(' ')[0])
    console.log('Amount')
    console.log(amount)
    console.log(typeof amount)
    const countryCode = JSON.parse(localStorage.getItem('country_code'))
    console.log('Country Code')
    console.log(countryCode)
    cc(amount, 'EUR', countryCode)
      .then((result) => {
        console.log('Converted Amount')
        console.log(result)
        return amount
      })
  } else {
    return value
  }
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      }
    ]
  }
})
