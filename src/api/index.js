/**
 * Created by huangwx on 12/04/2017.
 */

import { server } from '../common/constants'

const getByToken = url => token => fetch(`${server}${url}`, {
  method: 'GET',
  headers: { 'Authorization': `token ${token}` }
})

const getWithoutToken = url => fetch(`${server}${url}`)

const putByToken = url => data => token => fetch(`${server}${url}`, {
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `token ${token}`
  },
  body: JSON.stringify(data)
})

const postByToken = url => data => token => fetch(`${server}${url}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `token ${token}`
  },
  body: JSON.stringify(data)
})

const postWithoutToken = url => data  => fetch(`${server}${url}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})

export default {
  fetchDataFromUrl: url => token => token ? fetch(url, {
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  }) : fetch(url),
  userLogin: data => fetch(`${server}/token/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }),

  uploadCover: data => roomId => token => fetch(`${server}/room/${roomId}/upload_avatar/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',// ; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
      'Authorization': `token ${token}`,
    },
    body: data,
  }),

  upload_avatar: data => token => fetch(`${server}/profile/upload_avatar/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',// ; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
      'Authorization': `token ${token}`,
    },
    body: data,
  }),

  signUp: data => postWithoutToken(`/register/`)(data),

  findPassword: data => postWithoutToken(`/find_password/`)(data),
  /*
    GET METHODS
   */

  fetchRecommend: token => token ? getByToken(
    `/plaza/hot/`
  )(token) : getWithoutToken(
    `/plaza/hot/`
  ),
  fetchLatest: token => token ? getByToken(
    `/plaza/latest/`
  )(token) : getWithoutToken(
    `/plaza/latest/`
  ),
  fetchChannels: token => token ? getByToken(
    `/plaza/channels/`
  )(token) : getWithoutToken(
    `/plaza/channels/`
  ),
  fetchWorld: token => token ? getByToken(
    `/plaza/random/`
  )(token) : getWithoutToken(
    `/plaza/random/`
  ),
  fetchTop: token => token ? getByToken(
    `/plaza/top/`
  )(token) : getWithoutToken(
    `/plaza/top/`
  ),
  fetchPosters: token => token ? getByToken(
    `/plaza/posters/`
  )(token) : getWithoutToken(
    `/plaza/posters/`
  ),
  fetchRoomInfo: id => token => token ? getByToken(
    `/room/${id}/`
  )(token) : getWithoutToken(
    `/room/${id}/`
  ),
  fetchUserInfo: token => getByToken(
    `/profile/`
  )(token),
  fetchHistoryRoomList: name => token => getByToken(
    `/profile/${name}_history/`
  )(token),
  fetchUser: id => token => getByToken(
    `/user/${id}/`
  )(token),
  fetchDislikes: id => token => getByToken(
    `/user/${id}/thumb_downs/`
  )(token),
  fetchInitialLabels: token => getByToken(
    `/label/`
  )(token),
  fetchRoomList: token => getByToken(
    `/profile/rooms/`
  )(token),
  fetchUnreadRooms: token => getByToken(
    `/receive_unread/?id=${id}`
  )(token),
  fetchQuestionnaires: id => token => getByToken(
    `/room/${id}/questionnaires/`
  )(token),
  fetchParticipants: id => token => getByToken(
    `/room/${id}/participants/`
  )(token),
  fetchResult: resultId => id => token => getByToken(
    `/room/${id}/get_result/${resultId}/`
  )(token),
  followUser: userId => token => getByToken(
    `/user/${userId}/follow/`
  )(token),
  unfollowUser: userId => token => getByToken(
    `/user/${userId}/unfollow/`
  )(token),
  leaveRoom: roomId => token => getByToken(
    `/room/${roomId}/leave/`
  )(token),
  joinRoom: roomId => token => getByToken(
    `/room/${roomId}/join/`
  )(token),
  markRoom: roomId => token => getByToken(
    `/room/${roomId}/mark/`
  )(token),
  unmarkRoom: roomId => token => getByToken(
    `/room/${roomId}/unmark/`
  )(token),
  likeUser: userId => roomId => token => getByToken(
    `/room/${roomId}/thumb_up/?id=${userId}`
  )(token),
  messagePolling: token => getByToken(
    `/message_polling/`
  )(token),

  /*
    POST METHODS
   */
  /*
    data: {
      title: string,
      description: string,
      is_announcement: true | false (true for notifications, false for questionnaires)
      required: true (if it is questionnaires, show whether it's required)
    }
   */

  sendAnnouncement: data => roomId => token =>fetch(`${server}/room/${roomId}/create_announcement/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `token ${token}`,
    },
    body: JSON.stringify(data)
  }),

  /*
    data: {
      name: string
      gender: true | false | null
      department: string,
      grade: number,
      signature: string
    }
   */
  editUserInfo: data => token => putByToken(`/profile/edit/`)(data)(token),

  /*
    data: {
      cover: url : (dizhi),
      date_time_start: '2017-04-19 22:51',
      date_time_end: '2017-04-22 22:11',
      description: '' : string,
      is_matchroom: false,
      labels: [58, 35],
      location_string: '123123',
      max_participants: null or 12,
      options: "{''}",
      show: true,
      title: '123' : string
    }
   */
  createRoom: data => token => postByToken(`/create/`)(data)(token),

  /*
    data: {
      text: reportReason : string
    }
   */
  reportRoom: data => roomId => token => postByToken(`/room/${roomId}/report/`)(data)(token),

  /*
    data: {
      id: userId : int,
      text: reportReason : string
    }
   */
  reportUser: data => roomId => token => postByToken(`/room/${roomId}/thumb_down/`)(data)(token),

  /*
    data: {
      ids: array(int)
    }
   */
  likerUsers: data => roomId => token => postByToken(`/room/${roomId}/thumb_up/`)(data)(token),

  /*
    data: {
      text: string
    }
   */
  sendMessage: data => roomId => token => postByToken(`/room/${roomId}/send_message/`)(data)(token),

}


