import * as types from '../mutation-types'

const state = {
  loaded: false
}

const mutations = {
  [types.SET_LOADING] (state, loadedState) {
    state.loaded = loadedState
  }
}

const getters = {
  isLoaded: state => {
    return state.loaded
  }
}

export default {
  state,
  getters,
  mutations
}
