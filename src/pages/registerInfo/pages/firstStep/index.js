import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import I18n from 'react-native-i18n'
import BackgroundImage from '@/components/BackgroundImage'

import {
  MainButton,
  MainImage,
  MainText,
  MainView,
} from './style'

const bgUrl = require('@/img/image/signInfoBg.png')
const imageUrl = require('@/img/image/logoPink.png')

export default class firstStep extends Component {
  next = () => this.props.navigation.navigate('Second')

  render = () => (
    <BackgroundImage
      bgUrl={bgUrl}
      inlineStyle={{
        height: Dimensions.get('window').height * 0.9,
      }}
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
        />
      </MainView>
    </BackgroundImage>
  )
}
