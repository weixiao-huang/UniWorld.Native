import React from 'react'
import styled from 'styled-components/native'

const MainView = styled.View`
  background-color: white;
`
const ContentView = styled.View`
  margin-left: 15px;
  margin-right:15px;
  padding-bottom: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`

const TitleView = styled.View`
  align-items: center;
  padding-top: 20px;
  padding-bottom:20px;
  flex-direction: row;
`
const TitleText = styled.Text`
  fontSize: 24px;
  lineHeight: 32px;
  font-weight:500;
`
const TitleTagView = styled.View`
  background-color: #345586;
  justify-content: center;
  align-items: center;
  padding:2px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  margin-right: 15px;
`
const TagText = styled.Text`
  color: white;
  font-size: 12px;
  font-family:STHeiTiSC-Medium;
  font-weight:400;
`
const DescriptionView = styled.View`

`
const DescriptionText = styled.Text`
  font-size: 16;
  line-height: 27;
`
const DescriptionIconImage = styled.Image`
  width: 20px;
  height: 20px;
  resize-mode: cover;
`

const DescriptionIconUrl = require('@/img/icon/starIcon.png')

const Header = ({ title, titleTag, description }) => (
  <MainView>
    <ContentView>
      <TitleView>
        <TitleTagView>
          <TagText>{titleTag}</TagText>
        </TitleTagView>
        <TitleText>{title}</TitleText>
      </TitleView>
      <DescriptionView>
        <DescriptionText>
          <DescriptionIconImage source={DescriptionIconUrl} />
          {`  ${description}`}
        </DescriptionText>
      </DescriptionView>
    </ContentView>
  </MainView>
)

export default Header
