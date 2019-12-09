import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)
export default new vuex.Store({
  state: {
    citynm: '北京',
    cityid: 1
  },
  mutations: {
    getCitynm: (state, newCity) => {
      state.citynm = newCity.cityNm
      state.cityid = newCity.cityId
    }
  }
})
