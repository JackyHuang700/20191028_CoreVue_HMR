// -- 處理非同步 --
// -- 可複雜 --
// -- 命名以 action開頭， example: actionXoooo  --
import * as types from './mutationsType'

// type commit = {
//   commit: any
// }

//
// export const acitonSetNumber = ({ commit, state, rootState }: commit, number) => {
export const acitonSetNumber = ({ commit, state, rootState }, number) => {
  commit(types.SET_NUMBER, state.number + number)
}
