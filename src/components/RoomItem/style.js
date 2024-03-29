import styled, { css } from 'styled-components/native'

const TextStyle = css`
  color: #ec5367;
  font-size: 13px;
`

export const MainView = styled.View`

`
export const UpperView = styled.View``
export const FriendView = styled.View`
  flex: 1;
  flex-direction: row;
  marginLeft: 14px;
  marginTop: 10px;
  marginBottom: -6px;
  alignItems: center;
`

export const FriendText = styled.Text`
  paddingLeft: 10px;
  color: #ccc;
  fontSize: 13px;
`
export const FriendImage = styled.Image`
  width: 24px;
  height: 24px;
  borderRadius: 12px;
  margin: 2px;
`

export const RoomView = styled.View`
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  padding: 15px;
  height: 120px;
  flex-direction: row;
  flex: 1;
`

export const RoomCoverView = styled.View`
  height: 100%;
  width: 108px;
`

export const RoomCoverImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  resize-mode: cover;
`

export const RoomContentView = styled.View`
  flex: 1;
  margin-left: 10px;
`

export const TitleLableView = styled.View`
  background-color: #fdae57;
  border-radius: 5px;
  margin-right: 10px;
  alignItems: center;
  padding-left: 5px;
  padding-right: 5px;
`
export const TitleLabelText = styled.Text`
  flexDirection: row;
  color: white;
  font-size: 13px;
`

export const RoomContentTitleView = styled.View`
  flex-direction: row;

  align-items: center;
`

export const RoomContentTitleText = styled.Text`
  fontSize: 14px;
  fontWeight: 400;
`

export const RoomContentWrapView = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const RoomContentPlaceText = styled.Text`
  ${TextStyle}
`

export const RoomContentFooterView = styled.View`
  margin-top: 3px;
  justify-content: space-between;
  flex-direction: row;
`

export const RoomContentTimeView = styled.View`
`

export const RoomContentTimeText = styled.Text`
  ${TextStyle}
`

export const RoomContentPeopleView = styled.View`
  background-color: ${props => (props.grayBg ? '#aaa' : '#ec5367')};
  justify-content: center;
  align-Items: center;
  flex-direction: row;
  border-radius: 5px;
  width: 56px;
`

export const RoomContentPeopleText = styled.Text`
  color: white;
  padding-left: 5px;
`

export const RoomContentPeopleImage = styled.Image`
  width: 8px;
  height: 10px;
`

export const RoomContentPeopleIconText = styled.Text`
`
