import styled, { css } from 'styled-components/native'

const TextStyle = css`
  color: #ec5367;
  font-size: 13px;
`

export const MainView = styled.View`
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
  margin-left: 20px;
`

export const RoomContentTitleView = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: flex-start;
`

export const RoomContentTitleText = styled.Text`
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
  padding-left: 5px;
  padding-right: 5px;
  width: 60px;
`

export const RoomContentPeopleText = styled.Text`
  color: white;
`

export const RoomContentPeopleImage = styled.Image`
  width: 8px;
  height: 10px;
`

export const RoomContentPeopleIconText = styled.Text`
`
