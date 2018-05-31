import axios from 'axios'

export default {
  toLocalCurrency (name, value) {
    if (name.toLowerCase() === 'price') {
      console.log('Originam Value')
      console.log(value)
      console.log('Only Numbers')
      console.log(value.replace(/^\D+/g, ''))
      let amount = parseInt(value.replace(/^\D+/g, '').split(' ')[0])
      console.log('Amount')
      console.log(amount)
      console.log(typeof amount)
      const countryCode = localStorage.getItem('country_code')
      console.log('Country Code')
      console.log(countryCode)
      axios.get(`http://data.fixer.io/api/convert?access_key=f01dd1c7e6bf5b81e8c11a42ad55351e&from=EUR&to=${countryCode}&amount=${amount}`)
        .then((result) => {
          console.log('Converted Amount')
          console.log(result)
          return amount
        })
      // cc(amount, 'EUR', countryCode)
      //   .then((result) => {
      //
      //     return amount
      //   })
    } else {
      return value
    }
  }
}
