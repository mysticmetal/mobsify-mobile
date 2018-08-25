import { currencyAPI } from './api'

export default class Currency {
  static rates (currencyCode) {
    return currencyAPI().get(`?q=${currencyCode}&compact=ultra`)
  }
}
