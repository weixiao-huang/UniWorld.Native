/**
 * Created by huangwx on 14/04/2017.
 */

import * as types from '../types'

const initialState = {
  recommend: [],
  latest: [],
  world: [],
  roomList: [],
  roomInfo: {},
  questionnaires: {},
  refreshing: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.USER_LOGOUT:
      return initialState
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
    case types.GET_QUESTIONNAIRES:
      return {
        ...state,
        questionnaires: action.questionnaires
      }
    default:
      return state
  }
}
