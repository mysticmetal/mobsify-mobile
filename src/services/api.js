import axios from 'axios'

export default function () {
  return axios.create({
    baseURL: 'https://tranquil-eyrie-82152.herokuapp.com/gsmarena/'
  })
}

export const currencyAPI = function () {
  return axios.create({
    baseURL: 'https://free.currencyconverterapi.com/api/v6/convert'
  })
}
