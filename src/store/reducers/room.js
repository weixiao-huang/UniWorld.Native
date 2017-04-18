/**
 * Created by huangwx on 14/04/2017.
 */

import * as types from '../types'

const initialState = {
  recommend: [],
  latest: [],
  world: [],
  roomInfo: {},
  roomList: [],
  refreshing: false
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
    case types.GET_WORLD_ROOM_LIST:
      return {
        ...state,
        world: action.world
      }
    case types.GET_LATEST_ROOM_LIST:
      return {
        ...state,
        latest: action.latest
      }
    case types.GET_RECOMMEND_ROOM_LIST:
      return {
        ...state,
        recommend: action.recommend
      }
    case types.GET_ROOM_INFO:
      return {
        ...state,
        roomInfo: action.roomInfo
      }
    case types.GET_ROOM_LIST:
      return {
        ...state,
        roomList: action.roomList,
      }
    default:
      return state
  }
}
