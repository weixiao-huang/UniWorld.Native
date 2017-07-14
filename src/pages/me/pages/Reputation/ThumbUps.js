import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import I18n from '@/locales'

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
  border-width: 1px;
  border-color: #ff5757;
  border-radius: 50px;
  padding: 15px;
  margin: 15px;
`

const MainThumbUpsView = styled.View`
  flex: 1;
`

const MainThumbUpsText = styled.Text`
  color: #3555b6;
  font-size: 16px;
`

const MainTitleText = styled.Text`
  color: #5356cc;
  font-size: 18px;
`

const ThumbUps = ({ thumbUps }) => (
  <MainView>
    <MainTitleView>
      <MainTitleText>{I18n.t('Me.credit.likes')}</MainTitleText>
    </MainTitleView>
    <MainThumbUpsView>
      <MainThumbUpsText>{thumbUps}</MainThumbUpsText>
    </MainThumbUpsView>
  </MainView>
)

ThumbUps.propTypes = {
  thumbUps: PropTypes.number.isRequired,
}

export default ThumbUps
