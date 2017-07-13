import React from 'react'
import styled from 'styled-components/native'
import I18n from 'react-native-i18n'
import Avatar from '@/components/Avatar'
import { Dimensions } from 'react-native'

const gapPadding = 15
const boxPadding = 5
const avatarPadding = 10
const numPerRow = 4
const length = 7
const avatarSize = ((
    Dimensions.get('window').width -
    (2 * gapPadding) -
    (2 * boxPadding)
  ) / numPerRow) - (2 * avatarPadding)
const titleWidth = avatarSize + (2 * avatarPadding)

/*
  Styles
*/
const MainView = styled.View`
  padding: ${gapPadding}px;
  background-color: white;
`

const TitleView = styled.View`
  paddingBottom: 10px;
  borderBottomWidth: 1px;
  borderBottomColor: #f2f0f4;
  flex-direction: row;

`
const TitleText = styled.Text`
  fontSize: 15px;
  color: ${props => props.color || '#332f5e'};
  lineHeight: 44px;
`
const WrapView = styled.View`
  padding: ${boxPadding}px;
  paddingLeft: 0px;
  flex-direction: row;
  flex-wrap: wrap;
`
const ItemView = styled.View`
  padding: 5px;
  paddingLeft: ${avatarPadding}px;
  paddingRight: ${avatarPadding}px;
  width: ${titleWidth}px;
  align-items: center;
`
const ItemText = styled.Text`
  paddingTop: 10px;
  width: 60px;
  textAlign: center;
  lineHeight: 18px;
`

/*
  Page
*/
const AvatarBox = ({ participants }) => (
  <MainView>
    <TitleView>
      <TitleText>
        {I18n.t('Room.Detail.Member.title')}
      </TitleText>
      {participants && <TitleText color="red">
        {`  (${participants.length})`}
      </TitleText>}
    </TitleView>
    {participants ? <WrapView>
      {participants.map(item => (
        <ItemView key={item.id}>
          <Avatar
            size={avatarSize}
            id={item.id}
            avatar={item.avatar}
          />
          <ItemText>
            {item.name.length > length ?
              (item.name.slice(0, length).concat('...')) :
              item.name}
          </ItemText>
        </ItemView>
      ))}
    </WrapView> : null }
  </MainView>
)

export default AvatarBox
