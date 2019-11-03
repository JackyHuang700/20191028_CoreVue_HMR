// -- 處理同步事件(嚴禁非同步))) --
// -- 事件簡單單純化 --

import * as types from './mutationsType'

// -- state --
export const state = {
  number: 0
}

// -- mutations --
export const mutations = {
  [types.GET_NUMBER] (state) { return state.number },
  [types.SET_NUMBER] (state, number) {
    state.number = number
  }
}
