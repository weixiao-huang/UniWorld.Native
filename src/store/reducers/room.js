/**
 * Created by huangwx on 14/04/2017.
 */

import * as types from '../types'

const initialState = {
  recommend: [],
  latest: [],
  world: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.GET_WORLD_LIST:
      console.log('Actions: ', action)
      return {
        ...state,
        recommend: action.recommend,
        latest: action.latest,
        world: action.world
      }
    default:
      return state
  }
}
