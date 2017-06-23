import styled, { css } from 'styled-components/native'

const wrap = css`
  margin-top: 10px;
  margin-bottom: 14px;
`

export const MainScrollView = styled.ScrollView`
`

export const MainView = styled.View`
  padding-top: 20px;
  background-color: ${props => props.theme.gray};
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const HeaderImage = styled.Image`
  resize-mode: contain;
  height: 150px;
`

export const HeaderText = styled.Text`
  color: #95a8e2;
  font-size: 18px;
  padding: 18px;
`

export const TitleLabelView = styled.View`
  ${wrap}
`

export const TitleText = styled.Text`
  flex: 1;
`

export const LabelView = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`

export const CoverWrapView = styled.View`
  ${wrap}
`

export const CoverOuterView = styled.View`
  flex: 1;
  flex-direction: row;
`

export const CoverInnerView = styled.View`
  flex: 1;
  margin-right: 20px;
`

export const CoverTouch = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  margin: 4px;
  align-items: center;
  justify-content: space-between;
`

export const CoverPlaceholderText = styled.Text`
  color: #c7c7c7;
`

export const CoverPreviewView = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 20px;
`

export const CoverPreviewImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`

export const RequiredView = styled.View`
  ${wrap}
  width: 100%;
`

export const RequiredTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 14px;
  padding-bottom: 10px;
`

export const RequiredTitleImage = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`

export const RequiredTitleText = styled.Text`
  color: #3555b6;
  font-size: 18px;
  padding-left: 10px;
`

export const IntroInput = styled.TextInput`
  flex: 1;
  height: 150px;
`
