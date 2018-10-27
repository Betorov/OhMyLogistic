import axios from 'axios'

export default () => {
  return axios.create({
    baseUrl: 'localhost:8081'
  })
}