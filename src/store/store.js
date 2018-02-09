import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import user from './user'
import com from './com'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    channels: '',//话题显示列表
    channelIndex: 0,
    channelData: '',
    newDataIndex: '',//话题列表项
    isActive: 0,//选中的话题
    load: true,
    showMy: false,
    showLogin: false,
    collection: [],
    leftNavStatus:false,
    // likeImg: require("./assets/like.png")
  },
  mutations:{
    muChannels(state, data) {
      state.channels = data
    },
    muChannelIndex(state, index) {
      state.channelIndex = index
    },
    muGetData(state, data) {
      state.channelData = data
    },
    muNewDataIndex(state, index) {
      state.newDataIndex = index
    },
    increment(state, index) {
      state.channels.splice(index, 1)
    },
    decrement(state, item) {
      state.channels.push(item)
    },
    loading(state, statu) {
      state.load = statu
    },
    muIsActive(state, index) {
      state.isActive = index
    },
    muShowMy(state, statu) {
      state.showMy = statu
    },
    muShowLogin(state, statu) {
      state.showLogin = statu
    },
    muCollect(state, data) {
      state.collection.push(data)
      // state.collection.reverse()
    },
    muLike(state, data) {
      state.collection.splice(state.collection.indexOf(data), 1)
    }
  },
  actions: {
    setNavState({ commit }, status) {
      commit(commit(leftNavStatus), status)
    },
    acChannels({ commit,state }) {
      return new Promise((resolve, reject) => {
        Vue.http.get('http://localhost:3000/')
          .then(res => {
            // console.log(res.data);
            commit('muChannels', res.data.result)
          })
        resolve()
      })
    },
    acGetData({ commit,state }, channel) {
      return new Promise((resolve, reject) => {
        axios.get('/api/channel/' + channel)
          .then(res => {
            commit('muGetData', res.data.result.list)
            store.state.load = false
          })
        resolve()
      })
    },
    showToast({ commit }, status) {
      commit(commit(showToast), status)
    },
    showSuccess({ commit }, status) {
      commit(commit(showSuccess), status)
    },
    showFail({ commit }, status) {
      commit(commit(showFail), status)
    },
    toastMsg({ commit }, str) {
      commit(commit(toastMsg), str)
    },
    showAlert({ commit }, status) {
      commit(commit(showAlert), status)
    },
    alertMsg({ commit }, str) {
      commit(commit(alertMsg), str)
    },
    showTimePicker({ commit }, status) {
      commit(commit(showTimePicker), status)
    }
  },
  modules: {
    user,
    com
  }
})
