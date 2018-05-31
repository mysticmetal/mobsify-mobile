import baseAPI from './api'

export default class Api {
  static search (phoneName) {
    const urlFriendly = phoneName.split(' ').join('%20')
    return baseAPI().get(`search/phone/${urlFriendly}`)
  }
  static getPhoneDetail (phoneUrl) {
    return baseAPI().get(`phone/${phoneUrl}`)
  }
}
