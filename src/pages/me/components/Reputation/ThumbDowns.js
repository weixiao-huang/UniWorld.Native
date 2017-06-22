import React, { PropTypes } from 'react'
import styled from 'styled-components/native'

import thumbDownImg from '../../img/Thumbdown.png'

const MainView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #c4caf2;
  background-color: white;
`

const MainTitleView = styled.View`
  padding: 10px;
`

const MainContentView = styled.View`
  flex: 1;
`

const MainContentText = styled.Text`
  color: #5356cc;
  font-size: 16px;
`

const MainTitleImage = styled.Image`
  resize-mode: contain;
  height: 150px;
`

const ThumbDowns = ({ thumbDowns }) => (
  <MainView>
    <MainTitleView>
      <MainTitleImage source={thumbDownImg} />
    </MainTitleView>
    <MainContentView>
      <MainContentText>TA没有收到过差评奥</MainContentText>
    </MainContentView>
  </MainView>
)

ThumbDowns.propTypes = {
  thumbDowns: PropTypes.number.isRequired,
}

export default ThumbDowns
