import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Dimensions, StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'
import BackgroundImage from '@/components/BackgroundImage'
import Button from '@/components/Button'

const MainView = styled.View`
  paddingTop: 100px;
  align-items: center;
  flex: 1;
  flexDirection: column;
`
const MainImage = styled.Image`
  resizeMode: contain;
  height: 200px;
  marginBottom: 30px;
`
const MainText = styled.Text`
  color: #95a8e2;
  fontSize: 16px;
  padding: 5px;
  fontWeight: 500;
  lineHeight: 24px;
  backgroundColor: transparent;
`
const MainButton = styled(Button) `
  marginTop: 30px;
  borderRadius: 5px;
  padding: 5px;
  backgroundColor: #ec5367;
  width: 80%;
`
const bgUrl = require('@/img/image/signInfoBg.png')
const imageUrl = require('@/img/image/logoPink.png')

const localStyles = StyleSheet.create({
  button: {
    // marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#ec5367',
  },
})

export default class firstStep extends Component {
  next = () => {
    const {
      navigation: { navigate },
    } = this.props
    navigate('Second')
  }

  render = () => (

    <BackgroundImage
      bgUrl={bgUrl}
      inlineStyle={{ height: Dimensions.get('window').height * 0.9 }}
    >
      <MainView>
        <MainImage source={imageUrl} />
        <MainText>
          {I18n.t('SignInfo.first.message1')}
        </MainText>
        <MainText>
          {I18n.t('SignInfo.first.message2')}
        </MainText>
        <MainText>
          {I18n.t('SignInfo.first.message3')}
        </MainText>
        <MainButton
          title={I18n.t('SignInfo.first.nextButton')}
          onPress={this.next}
          inlineStyle={[localStyles.button]}
        />
      </MainView>
    </BackgroundImage>

  )
}


