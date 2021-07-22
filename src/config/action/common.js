import fetcher from '../fetch'
import Apis from '../apis'

let baseUrl = 'https://mwapapi.xjhktv.com/'
// let cityBaseUrl = 'https://miniprogramdev.xjhktv.com/'

export default {
  joinUs: function (data) {
    return fetcher.post(baseUrl + Apis.join, data)
  },

  getCityArea: function (data) {
    return fetcher.get(baseUrl + Apis.city, data)
  },

  getStoreList: function (data) {
    return fetcher.get(baseUrl + Apis.store + `?city=${data['city']}&area=${data['area']}`)
  },

  getRecruitList: function (data) {
    return fetcher.get(baseUrl + Apis.recruit)
  },

  getRecruitDetail: function (data) {
    return fetcher.get(baseUrl + Apis.recruitDetail + `?id=${data['id']}`)
  }
}
