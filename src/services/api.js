import axios from 'axios'

export default function () {
  return axios.create({
    baseURL: 'https://tranquil-eyrie-82152.herokuapp.com/gsmarena/'
  })
}
