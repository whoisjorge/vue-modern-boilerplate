import * as types from '../mutation-types'

const state = {
  loaded: false
}

const getters = {
  isLoaded: state => {
    return state.loaded
  }
}

const mutations = {
  [types.SET_LOADING] (state, loadedState) {
    state.loaded = loadedState
  }
}

export default {
  state,
  getters,
  mutations
}
