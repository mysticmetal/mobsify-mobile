import Currency from '@/services/currency'
import currencyJSON from '@/assets/json/currency.json'

export default {
  async toLocalCurrency (value) {
    const amount = parseInt(value.replace(/^\D+/g, '').split(' ')[0])
    const countryCode = JSON.parse(localStorage.getItem('country_code'))
    const currencyCode = currencyJSON[countryCode] || 'Unknown'

    const success = await Currency.rates(`EUR_${currencyCode}`)

    if (success.data) {
      const roundedAmount = Math.round(parseFloat(amount * success.data['EUR_' + currencyCode]))
      const formatedAmount = roundedAmount.toLocaleString('en-US', {
        style: 'currency',
        currency: currencyCode
      })
      if (formatedAmount !== 'NaN') {
        this.price = formatedAmount
      } else {
        this.price = 'Price Unknown'
      }
    }
  }
}
